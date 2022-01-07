import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[2, 7, 11, 15], 9', () =>
  assertEquals(solution([2, 7, 11, 15], 9), [0, 1]),
);

Deno.test('[3,2,4], 6', () => assertEquals(solution([3, 2, 4], 6), [1, 2]));

Deno.test('[3,3], 6', () => assertEquals(solution([3, 3], 6), [0, 1]));

Deno.test('[0,4,3,0], 0', () =>
  assertEquals(solution([0, 4, 3, 0], 0), [0, 3]),
);

Deno.test('[-1,-2,-3,-4,-5], -8', () =>
  assertEquals(solution([-1, -2, -3, -4, -5], -8), [2, 4]),
);

Deno.test('[-3,4,3,90], 0', () =>
  assertEquals(solution([-3, 4, 3, 90], 0), [0, 2]),
);

Deno.test('[-18,12,3,0], -6', () =>
  assertEquals(solution([-18, 12, 3, 0], -6), [0, 1]),
);
