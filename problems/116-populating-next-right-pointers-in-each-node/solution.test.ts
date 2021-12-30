import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { Node, ArrayToTree } from '../../helpers/binary-tree.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[1,2,3,4,5,6,7]', () => {
  const _1 = new Node(1);
  const _2 = new Node(2);
  const _3 = new Node(3);
  const _4 = new Node(4);
  const _5 = new Node(5);
  const _6 = new Node(6);
  const _7 = new Node(7);

  const expected = _1;
  _1.left = _2;
  _1.right = _3;
  _2.left = _4;
  _2.right = _5;
  _2.next = _3;
  _3.left = _6;
  _3.right = _7;
  _4.next = _5;
  _5.next = _6;
  _6.next = _7;

  assertEquals(solution(ArrayToTree([1, 2, 3, 4, 5, 6, 7])), expected);
});

Deno.test('[1,2,3,4,5,6,7,8]', () => {
  const _1 = new Node(1);
  const _2 = new Node(2);
  const _3 = new Node(3);
  const _4 = new Node(4);
  const _5 = new Node(5);
  const _6 = new Node(6);
  const _7 = new Node(7);
  const _8 = new Node(8);

  const expected = _1;
  _1.left = _2;
  _1.right = _3;
  _2.left = _4;
  _2.right = _5;
  _2.next = _3;
  _3.left = _6;
  _3.right = _7;
  _4.left = _8;
  _4.next = _5;
  _5.next = _6;
  _6.next = _7;
  console.log(_1);
  console.log(_1.next);

  assertEquals(solution(ArrayToTree([1, 2, 3, 4, 5, 6, 7])), expected);
});

Deno.test('[]', () => assertEquals(solution(ArrayToTree([])), null));
