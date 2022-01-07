#!/usr/bin/env deno run --unstable --allow-read --allow-write --allow-net

import {
  join,
  parse,
  gql,
  request,
  renderFile,
  html2md,
  subscript,
  superscript,
  format,
  PrettierOptions,
  parserMD,
  parserTS,
  parserJS,
} from './deps.ts';

function help_menu() {
  console.info('');
  console.info('USAGE:');
  console.info('   leetcode-starter [OPTIONS] PROBLEM_ID');
  console.info('');
  console.info('OPTIONS:');
  console.info('   -l, --language <lang=ts>');
  console.info('           Language to use [possible values: ts, js, sh]');
  console.info('   -h, --help');
  console.info('           Show this message');
}

async function main() {
  const args = parse(Deno.args, {
    alias: {
      help: 'h',
      language: 'l',
    },
    boolean: ['help'],
    string: ['language'],
    default: {
      help: false,
      language: 'ts',
    },
  });

  if (args.help) {
    help_menu();
    Deno.exit(0);
  }

  const problem_id = args._[0];
  if (problem_id == null) {
    console.error(`PROBLEM_ID is required`);
    Deno.exit(1);
  }

  // check if problem already exists
  for await (const n of Deno.readDir('problems')) {
    if (n.name.startsWith(`${problem_id}-`)) {
      console.error(`Problem ${problem_id} already exists`);
      Deno.exit(1);
    }
  }

  const problem = (
    await request(
      'https://leetcode.com/graphql',
      gql`
        query problemsetQuestionList($filters: QuestionListFilterInput) {
          problemsetQuestionList: questionList(
            filters: $filters
            categorySlug: ""
            limit: 1
          ) {
            questions: data {
              difficulty
              id: questionFrontendId
              title
              titleSlug
              content
              likes
              dislikes
              codeSnippets {
                langSlug
                code
              }
              tags: topicTags {
                name
                slug
              }
            }
          }
        }
      `,
      { filters: { searchKeywords: `${problem_id}.` } },
    )
  ).problemsetQuestionList.questions[0];

  // const prettier_config = (await prettier.resolveConfigFile()) ?? {};
  const prettier_config: PrettierOptions = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    trailingComma: 'all',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
  };
  const description = format(html2md(problem.content), {
    ...prettier_config,
    parser: 'markdown',
    plugins: [parserMD],
  })
    .replaceAll(/<sub>(.*?)<\/sub>/gi, (s, m1) => subscript(m1))
    .replaceAll(/<sup>(.*?)<\/sup>/gi, (s, m1) => superscript(m1));

  const dir = join('problems', `${problem_id}-${problem.titleSlug}`);

  await Deno.mkdir(dir, { recursive: true });

  await Deno.writeTextFile(
    join(dir, 'problem.md'),
    await renderFile(join('template', 'problem.md.hbs'), {
      problem,
      description,
    }),
  );

  let solution_src_name: string;
  let tests_src_name: string;
  let method_name: string;
  let method: string;

  switch (args.language) {
    case 'ts':
    case 'js': {
      const snippet = problem.codeSnippets.find(
        (s: { langSlug: string }) =>
          s.langSlug === (args.language === 'ts' ? 'typescript' : 'javascript'),
      );
      method_name = snippet.code.match(
        /^(?:function|class) (\w+) ?(?:\(|{)/m,
      )[1];
      method = format(snippet.code, {
        ...prettier_config,
        parser: args.language === 'ts' ? 'typescript' : 'babel',
        plugins: [parserTS, parserJS],
      });
      solution_src_name = `solution.${args.language}`;
      tests_src_name = `solution.test.${args.language}`;
      break;
    }
    case 'sh':
    case 'bash': {
      const snippet = problem.codeSnippets.find(
        (s: { langSlug: string }) => s.langSlug === 'bash',
      );
      method_name = 'NO_METHOD_NAME';
      method = snippet.code;
      solution_src_name = 'solution.sh';
      tests_src_name = 'solution.test.sh';
      break;
    }
    default: {
      console.error(`Unknown language "${args.language}"`);
      Deno.exit(1);
    }
  }

  const model = { problem, method_name, method };
  await Deno.writeTextFile(
    `${dir}/${solution_src_name}`,
    await renderFile(join('template', `${solution_src_name}.hbs`), model),
  );
  await Deno.writeTextFile(
    `${dir}/${tests_src_name}`,
    await renderFile(join('template', `${tests_src_name}.hbs`), model),
  );

  switch (args.language) {
    case 'sh':
    case 'bash': {
      try {
        await Promise.all([
          Deno.chmod(`${dir}/${solution_src_name}`, 0o755),
          Deno.chmod(`${dir}/${tests_src_name}`, 0o755),
        ]);
      } catch (e) {
        console.error(e);
      }
      solution_src_name = 'solution.sh';
      tests_src_name = 'solution.test.sh';
      break;
    }
  }
}

main();
