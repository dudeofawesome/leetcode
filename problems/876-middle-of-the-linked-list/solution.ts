/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
 */
import { ListNode } from '../../helpers/list-node.ts';

export const _export = middleNode;

// @lc code=start
function middleNode(head: ListNode | null): ListNode | null {
  let cursor = head;
  let counter = 0;
  while (cursor != null) {
    cursor = cursor.next;
    counter++;
  }
  const even = counter % 2 === 0;
  counter = counter / 2;

  cursor = head;
  for (; counter > (even ? 0 : 1); counter--) {
    cursor = cursor?.next ?? null;
  }

  return cursor;
}
// @lc code=end
