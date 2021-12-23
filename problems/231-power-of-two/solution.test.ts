import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('1', () => assertEquals(solution(1), true));

Deno.test('8', () => assertEquals(solution(8), true));

Deno.test('16', () => assertEquals(solution(16), true));

Deno.test('32', () => assertEquals(solution(32), true));

Deno.test('3', () => assertEquals(solution(3), false));

Deno.test('348832', () => assertEquals(solution(348832), false));

Deno.test('0', () => assertEquals(solution(0), false));

Deno.test('-64', () => assertEquals(solution(-64), false));
