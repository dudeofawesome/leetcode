import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _decodeString as decodeString } from './solution.ts';

const _sleep = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};
await _sleep();

Deno.test('3[a]2[bc]', () =>
  assertEquals(decodeString('3[a]2[bc]'), 'aaabcbc'),
);

Deno.test('2[abc]3[cd]ef', () =>
  assertEquals(decodeString('2[abc]3[cd]ef'), 'abcabccdcdcdef'),
);

Deno.test('abc3[cd]xyz', () =>
  assertEquals(decodeString('abc3[cd]xyz'), 'abccdcdcdxyz'),
);

Deno.test('3[a2[c]]', () =>
  assertEquals(decodeString('3[a2[c]]'), 'accaccacc'),
);

Deno.test('30[a2[c]]', () =>
  assertEquals(
    decodeString('30[a2[c]]'),
    'accaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccaccacc',
  ),
);

Deno.test('head11[a2[b]2[c]]3[de]tail', () =>
  assertEquals(
    decodeString('head11[a2[b]2[c]]3[de]tail'),
    'headabbccabbccabbccabbccabbccabbccabbccabbccabbccabbccabbccdededetail',
  ),
);
