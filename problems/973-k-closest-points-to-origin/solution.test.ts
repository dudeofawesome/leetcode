import { assertArrayIncludes } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[[1,3],[-2,2]], 1', () =>
  assertArrayIncludes(
    solution(
      [
        [1, 3],
        [-2, 2],
      ],
      1,
    ),
    [[-2, 2]],
  ),
);

Deno.test('[[3,3],[5,-1],[-2,4]], 2', () =>
  assertArrayIncludes(
    solution(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2,
    ),
    [
      [3, 3],
      [-2, 4],
    ],
  ),
);
