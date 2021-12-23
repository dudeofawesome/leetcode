/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 */

import { ListNode } from '../../helpers/list-node.ts';

export const _export = reorderList;

// @lc code=start
/** Do not return anything, modify head in-place instead. */
function reorderList(head?: ListNode | null): void {
  // reorder list
  while (head != null) {
    let tail = head;
    let tail_min_1: ListNode | undefined;
    while (tail.next != null) {
      tail_min_1 = tail;
      tail = tail.next;
    }

    const head_next = head.next;
    if (head.next === tail) break;
    head.next = tail;
    head.next.next = head_next;
    if (tail_min_1) {
      tail_min_1.next = null;
    }

    head = head_next;
  }
}
// @lc code=end
