/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 */

export const _export = kClosest;

// @lc code=start
function kClosest(points: [number, number][], k: number): [number, number][] {
  return points
    .map(p => ({
      x: p[0],
      y: p[1],
      d: Math.pow(p[0], 2) + Math.pow(p[1], 2),
    }))
    .sort((a, b) => a.d - b.d)
    .slice(0, k)
    .map(p => [p.x, p.y]);
}
// @lc code=end
