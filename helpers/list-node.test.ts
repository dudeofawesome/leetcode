import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { ArrayToList, ListToArray, ListNode } from '../helpers/list-node.ts';

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
