import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';
import { ArrayToList, ListToArray } from '../../helpers/list-node.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[2,4,3] + [5,6,4]', () =>
  assertEquals(
    ListToArray(solution(ArrayToList([2, 4, 3]), ArrayToList([5, 6, 4]))),
    [7, 0, 8],
  ),
);

Deno.test('[0] + [0]', () =>
  assertEquals(ListToArray(solution(ArrayToList([0]), ArrayToList([0]))), [0]),
);

Deno.test('[9,9,9,9,9,9,9] + [9,9,9,9]', () =>
  assertEquals(
    ListToArray(
      solution(ArrayToList([9, 9, 9, 9, 9, 9, 9]), ArrayToList([9, 9, 9, 9])),
    ),
    [8, 9, 9, 9, 0, 0, 0, 1],
  ),
);
