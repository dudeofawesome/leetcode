import {
  assertEquals,
  assertStrictEquals,
} from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { Node, ArrayToTree, TreeToArray } from '../helpers/binary-tree.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('ArrayToTree Balanced', () => {
  let actual = ArrayToTree([1, 2, 3, 4, 5, 6, 7]);
  let expected = new Node(
    1,
    new Node(2, new Node(4), new Node(5)),
    new Node(3, new Node(6), new Node(7)),
  );
  assertEquals(actual, expected);
});

Deno.test('ArrayToTree Unbalanced', () => {
  let actual = ArrayToTree([1, 2, 3, 4, 5, 6, 7, 8]);
  let expected = new Node(
    1,
    new Node(2, new Node(4, new Node(8)), new Node(5)),
    new Node(3, new Node(6), new Node(7)),
  );
  assertEquals(actual, expected);
});

Deno.test('ArrayToTree empty', () => {
  assertEquals(ArrayToTree([]), null);
});

// Deno.test('ArrayToTree null', () => {
//   assertEquals(ArrayToTree(null), new Node());
// });

// Deno.test('ArrayToTree undefined', () => {
//   assertEquals(ArrayToTree(undefined), new Node());
// });

Deno.test('ArrayToTree Balanced', () => {
  let actual: number[] = TreeToArray(
    new Node(
      1,
      new Node(2, new Node(4), new Node(5)),
      new Node(3, new Node(6), new Node(7)),
    ),
  );
  let expected: number[] = [1, 2, 3, 4, 5, 6, 7];
  assertEquals(actual, expected);
});

Deno.test('TreeToArray Unbalanced', () => {
  let actual: number[] = TreeToArray(
    new Node(
      1,
      new Node(2, new Node(4, new Node(8)), new Node(5)),
      new Node(3, new Node(6), new Node(7)),
    ),
  );
  let expected: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  assertEquals(actual, expected);
});
