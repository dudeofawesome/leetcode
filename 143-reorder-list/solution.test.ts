import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { ArrayToList, ListToArray, ListNode } from '../helpers/list-node.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('ArrayToList', () => {
  let actual: ListNode | null | undefined = ArrayToList([1, 2, 3, 4]);
  let expected: ListNode | null | undefined = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4))),
  );
  while (actual || expected) {
    assertEquals(actual?.val, expected?.val);
    actual = actual?.next;
    expected = expected?.next;
  }
});

Deno.test('ListToArray', () => {
  let actual = ListToArray(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
  );
  let expected = [1, 2, 3, 4];

  assertEquals(actual, expected);
});

Deno.test('null', () => {
  assertEquals(solution(), null);
});

Deno.test('[1,2]', () => {
  const head = ArrayToList([1, 2]);
  solution(head);
  assertEquals(ListToArray(head), [1, 4, 2, 3]);
});

Deno.test('[1..3]', () => {
  const head = ArrayToList([1, 2, 3]);
  solution(head);
  assertEquals(ListToArray(head), [1, 4, 2, 3]);
});

Deno.test('[1..4]', () => {
  const head = ArrayToList([1, 2, 3, 4]);
  solution(head);
  assertEquals(ListToArray(head), [1, 4, 2, 3]);
});

Deno.test('[1..5]', () => {
  const head = ArrayToList([1, 2, 3, 4, 5]);
  solution(head);
  assertEquals(ListToArray(head), [1, 5, 2, 4, 3]);
});

Deno.test('[1, 8, 15, 20, 80]', () => {
  const head = ArrayToList([1, 8, 15, 20, 80]);
  solution(head);
  assertEquals(ListToArray(head), [1, 80, 8, 20, 15]);
});

Deno.test('[1..15]', () => {
  const head = ArrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  solution(head);
  assertEquals(
    ListToArray(head),
    [1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9, 8],
  );
});
