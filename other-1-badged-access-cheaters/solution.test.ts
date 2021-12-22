import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('test 1', () =>
  assertEquals(
    solution([
      ['Martha', 'exit'],
      ['Paul', 'enter'],
      ['Martha', 'enter'],
      ['Steve', 'enter'],
      ['Martha', 'exit'],
      ['Jennifer', 'enter'],
      ['Paul', 'enter'],
      ['Curtis', 'exit'],
      ['Curtis', 'enter'],
      ['Paul', 'exit'],
      ['Martha', 'enter'],
      ['Martha', 'exit'],
      ['Jennifer', 'exit'],
      ['Paul', 'enter'],
      ['Paul', 'enter'],
      ['Martha', 'exit'],
      ['Paul', 'enter'],
      ['Paul', 'enter'],
      ['Paul', 'exit'],
      ['Paul', 'exit'],
    ]),
    [
      ['Paul', 'Curtis', 'Steve'],
      ['Martha', 'Curtis', 'Paul'],
    ],
  ),
);

Deno.test('Paul is based', () =>
  assertEquals(
    solution([
      ['Paul', 'enter'],
      ['Paul', 'exit'],
    ]),
    [[], []],
  ),
);

Deno.test("Paul isn't based 1", () =>
  assertEquals(
    solution([
      ['Paul', 'enter'],
      ['Paul', 'enter'],
      ['Paul', 'exit'],
      ['Paul', 'exit'],
    ]),
    [['Paul'], ['Paul']],
  ),
);

Deno.test("Paul isn't based 2", () =>
  assertEquals(
    solution([
      ['Paul', 'enter'],
      ['Paul', 'enter'],
      ['Paul', 'exit'],
      ['Paul', 'exit'],
    ]),
    [['Paul'], ['Paul']],
  ),
);

Deno.test("Paul isn't based 3", () =>
  assertEquals(
    solution([
      ['Paul', 'enter'],
      ['Paul', 'exit'],
      ['Paul', 'exit'],
      ['Paul', 'enter'],
    ]),
    [['Paul'], ['Paul']],
  ),
);
