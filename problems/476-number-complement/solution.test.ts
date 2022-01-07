import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('5', () => assertEquals(solution(5), 0b010));

Deno.test('1', () => assertEquals(solution(1), 0b0));

Deno.test('14', () => assertEquals(solution(14), 0b0001));

Deno.test('15', () => assertEquals(solution(15), 0b0000));

Deno.test('16', () => assertEquals(solution(16), 0b01111));

Deno.test('17', () => assertEquals(solution(17), 0b01110));

Deno.test('1,073,741,824', () =>
  assertEquals(solution(1_073_741_824), 0b0111111111111111111111111111111),
);
