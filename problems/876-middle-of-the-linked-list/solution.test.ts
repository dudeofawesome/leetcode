import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';
import { ArrayToList, ListToArray } from '../../helpers/list-node.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[1,2,3,4,5]', () =>
  assertEquals(ListToArray(solution(ArrayToList([1, 2, 3, 4, 5]))), [3, 4, 5]),
);

Deno.test('[1,2,3,4,5,6]', () =>
  assertEquals(
    ListToArray(solution(ArrayToList([1, 2, 3, 4, 5, 6]))),
    [4, 5, 6],
  ),
);
