/*
 * @lc app=leetcode id=1200 lang=typescript
 *
 * [1200] Minimum Absolute DIfference
 */

export const _export = minimumAbsDifference;

// @lc code=start
function minimumAbsDifference(arr: number[]): number[][] {
  const sorted = arr.sort((a, b) => a - b);

  let min_diff = Infinity;
  let pairs: [number, number][] = [];

  for (let i = 1; i < sorted.length; i++) {
    // get the absolute difference of the 2 nums
    const diff = Math.abs(sorted[i] - sorted[i - 1]);

    if (diff < min_diff) {
      // reset minimum diff, pairs list
      min_diff = diff;
      pairs = [];
      // add pair to list
      pairs.push([sorted[i - 1], sorted[i]]);
    } else if (diff === min_diff) {
      // add pair to list
      pairs.push([sorted[i - 1], sorted[i]]);
    }
  }

  return pairs;
}
// @lc code=end
