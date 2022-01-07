/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

export const _export = merge;

// @lc code=start
function merge(intervals: [number, number][]): [number, number][] {
  const merged_intervals: [number, number][] = [];

  for (let i = 0; i < intervals.length; i++) {
    const last_interval = merged_intervals[merged_intervals.length - 1];
    if (last_interval != null) {
      if (intervals[i][0] <= last_interval[1]) {
        last_interval[1] = intervals[i][1];
      } else {
        merged_intervals.push([intervals[i][0], intervals[i][1]]);
      }
    } else {
      merged_intervals.push([intervals[0][0], intervals[0][1]]);
    }
  }

  if (merged_intervals[merged_intervals.length - 1] != null) {
    merged_intervals[merged_intervals.length - 1][1] =
      intervals[intervals.length - 1][1] ?? -1;
  }

  return merged_intervals;
}
// @lc code=end
