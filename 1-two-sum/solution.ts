/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

export const _export = twoSum;

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error(`No valid answers`);
}
// @lc code=end
