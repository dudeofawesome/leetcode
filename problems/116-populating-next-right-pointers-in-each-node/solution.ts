/*
 * @lc app=leetcode id=116 lang=typescript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

import { Node } from '../../helpers/binary-tree.ts';
export const _export = connect;

// @lc code=start

function connect(root: Node | null): Node | null {
  // skip if null. this simplifies types
  if (root == null) return root;

  let layer: Node[] = [root];
  while (layer.length > 0) {
    for (let i = 0; i < layer.length; i++) {
      layer[i].next = layer[i + 1] ?? null;
    }
    layer = layer.reduce<Node[]>((prev, curr) => {
      if (curr.left != null) prev.push(curr.left);
      if (curr.right != null) prev.push(curr.right);
      return prev;
    }, []);
  }

  return root;
}
// @lc code=end
