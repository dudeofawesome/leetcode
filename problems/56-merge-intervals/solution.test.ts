import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[[1,3],[2,6],[8,10],[15,18]]', () =>
  assertEquals(
    solution([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
    [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  ),
);

Deno.test('[[1,4],[4,5]]', () =>
  assertEquals(
    solution([
      [1, 4],
      [4, 5],
    ]),
    [[1, 5]],
  ),
);

Deno.test('[[1,3],[2,6],[15,18]]', () =>
  assertEquals(
    solution([
      [1, 3],
      [2, 6],
      [15, 18],
    ]),
    [
      [1, 6],
      [15, 18],
    ],
  ),
);

Deno.test('[[1,4],[0,4]]', () =>
  assertEquals(
    solution([
      [1, 4],
      [0, 4],
    ]),
    [[0, 4]],
  ),
);

Deno.test('[[1,4]]', () => assertEquals(solution([[1, 4]]), [[1, 4]]));
