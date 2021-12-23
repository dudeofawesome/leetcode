#!/usr/bin/env bash

function main() {
  PROBLEM_ID="${@: -1}"
  LANGUAGE="ts"

  while getopts hl:-: option
  do
    case "${option}" in
      l)
        LANGUAGE="$OPTARG"
        ;;
      -)
        case "${OPTARG}" in
          language)
            echo "IT WAS $OPTARG"
            LANGUAGE="$OPTARG"
            ;;
          completion)
            echo "Adding fish completions"
            fish_completions
            exit 0
            ;;
          help)
            help_menu
            exit 0
            ;;
          *)
            echo "Unknown argument: '$OPTARG'"
            echo ""
            help_menu
            exit 1
            ;;
        esac
        ;;
      h)
        help_menu
        exit 0
        ;;
      *)
        echo "Unknown argument: '$option'"
        echo ""
        help_menu
        exit 1
        ;;
    esac
  done

  # get problem by number
  PROBLEM_JSON=$(curl --silent --request POST \
    --url https://leetcode.com/graphql \
    --header 'Content-Type: application/json' \
    --data '{"query":"query problemsetQuestionList($filters: QuestionListFilterInput) {problemsetQuestionList: questionList(filters: $filters, categorySlug: \"\", limit: 1) {questions: data {difficulty, questionFrontendId, title, titleSlug, topicTags {name}, likes, dislikes}}}","variables":{"filters":{"searchKeywords":"'$PROBLEM_ID'."},"limit":1},"operationName":"problemsetQuestionList"}' \
    | jq '.data.problemsetQuestionList.questions[0]')

  echo "$PROBLEM_JSON"

  PROBLEM_NAME="$(echo "$PROBLEM_JSON" | jq -r '.title')"
  PROBLEM_NAME_KEBAB="$(kebab_case "$PROBLEM_NAME")"
  PROBLEM_DIFFICULTY="$(echo "$PROBLEM_JSON" | jq -r '.difficulty')"
  PROBLEM_LIKES="$(echo "$PROBLEM_JSON" | jq -r '.likes')"
  PROBLEM_DISLIKES="$(echo "$PROBLEM_JSON" | jq -r '.dislikes')"
  PROBLEM_TAGS="$(echo "$PROBLEM_JSON" | jq -r '.topicTags')"

  METHOD_NAME="solution"
  METHOD_SIGNATURE="function solution(input: string): string"

  problem_dir="problems/$PROBLEM_ID-$PROBLEM_NAME_KEBAB"

  if [ -d "$problem_dir" ]; then
    echo "Problem $PROBLEM_ID already exists"
    exit 1
  fi

  mkdir -p "$problem_dir"

  # export the variables we want to use for templating
  export PROBLEM_ID PROBLEM_NAME PROBLEM_DIFFICULTY PROBLEM_LIKES \
    PROBLEM_DISLIKES PROBLEM_TAGS METHOD_NAME METHOD_SIGNATURE

  cat "template/problem.md" | envsubst > "$problem_dir/problem.md"

  case "$LANGUAGE" in
    "ts"|"js")
      METHOD_NAME="solution"
      case "$LANGUAGE" in
        "ts") METHOD_SIGNATURE="function solution(input: string): string";;
        "js") METHOD_SIGNATURE="function solution(input)";;
      esac

      cat "template/solution.$LANGUAGE" | envsubst > "$problem_dir/solution.$LANGUAGE"
      cat "template/solution.test.$LANGUAGE" | envsubst > "$problem_dir/solution.test.$LANGUAGE"
      ;;
  esac
}

function fish_completions() {
  echo "Completions aren't implemented at this time."
  exit 1
  COMPLETIONS_DIR=$(pkg-config --variable completionsdir fish)
  # echo 'complete -c docker-logs -f -w "docker logs"' | sudo tee -a "$COMPLETIONS_DIR/leetcode-starter.fish"
}

function help_menu() {
  echo -e ""
  echo -e "USAGE:"
  echo -e "   leetcode-starter [OPTIONS] PROBLEM_ID"
  echo -e ""
  echo -e "OPTIONS:"
  echo -e "   -l, --language <lang=ts>"
  echo -e "           Language to use [possible values: ts, js]"
  echo -e "   -h, --help"
  echo -e "           Show this message"
}

function kebab_case() {
  echo $( \
    echo "$1" \
    | sed 's/[_ ]/-/g' \
    | sed 's/[.,:;*$()\\|/]//g' \
    | tr '[:upper:]' '[:lower:]' \
  )
}

main "$@"
