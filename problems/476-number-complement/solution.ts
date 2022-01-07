/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

export const _export = findComplement;

// @lc code=start
function findComplement(num: number): number {
  let flipper = 0b0;
  while (Math.pow(2, flipper) <= num) {
    flipper++;
  }
  return num ^ (Math.pow(2, flipper) - 1);
}
// @lc code=end
