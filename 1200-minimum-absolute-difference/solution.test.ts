import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
const _sleep = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};
await _sleep();

Deno.test('[4,2,1,3]', () =>
  assertEquals(solution([4, 2, 1, 3]), [
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
);

Deno.test('[1,3,6,10,15]', () =>
  assertEquals(solution([1, 3, 6, 10, 15]), [[1, 3]]),
);

Deno.test('[3,8,-10,23,19,-4,-14,27]', () =>
  assertEquals(solution([3, 8, -10, 23, 19, -4, -14, 27]), [
    [-14, -10],
    [19, 23],
    [23, 27],
  ]),
);
