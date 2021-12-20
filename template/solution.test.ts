import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
const _sleep = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};
await _sleep();

Deno.test('test 1', () => assertEquals(solution('input'), 'input solved'));
