/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

import { ListNode } from '../../helpers/list-node.ts';

export const _export = addTwoNumbers;

// @lc code=start
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let head: ListNode = new ListNode();
  let cursor: ListNode = head;
  let carry = 0;
  while (l1 != null || l2 != null || carry !== 0) {
    let s = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(s / 10);
    s -= carry * 10;

    cursor.next = new ListNode(s);
    cursor = cursor.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return head.next;
}
// @lc code=end
