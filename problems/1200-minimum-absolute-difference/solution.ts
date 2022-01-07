/*
 * @lc app=leetcode id=1200 lang=typescript
 *
 * [1200] Minimum Absolute DIfference
 */

export const _export = minimumAbsDifference;

// @lc code=start
function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);

  let min_diff = Infinity;
  let pairs: [number, number][] = [];

  for (let i = 1; i < arr.length; i++) {
    // get the absolute difference of the 2 nums
    const diff = arr[i] - arr[i - 1];

    if (diff < min_diff) {
      // reset minimum diff, pairs list and add pair to list
      min_diff = diff;
      pairs = [[arr[i - 1], arr[i]]];
    } else if (diff === min_diff) {
      // add pair to list
      pairs.push([arr[i - 1], arr[i]]);
    }
  }

  return pairs;
}
// @lc code=end
