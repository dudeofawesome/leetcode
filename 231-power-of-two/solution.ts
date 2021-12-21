/*
 * @lc app=leetcode id= lang=typescript
 *
 * []
 */

export const _export = isPowerOfTwo;

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n === 1) return true;

  do {
    n = n / 2;
  } while (n > 2 && n % 1 === 0);

  return n === 2 || n === 1;
}
// @lc code=end
