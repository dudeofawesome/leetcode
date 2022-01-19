/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
 */

import { ListNode } from '../../helpers/list-node.ts';

// @lc code=start
function detectCycle(head: ListNode | null): ListNode | null {
  const nodes: ListNode[] = [];
  while (head?.next != null) {
    const node = nodes.find(n => n === head);
    if (node != null) {
      return node;
    }
    nodes.push(head);
    head = head.next;
  }

  return null;
}
// @lc code=end

export const _export = detectCycle;
