#!/usr/bin/env deno test

import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';
import { _export as solution } from './solution.ts';
import {
  ListNode,
  ListToArray,
  ArrayToList,
  FindTail,
} from '../../helpers/list-node.ts';

// sleep long enough for the Deno debugger to catch up
// https://github.com/denoland/vscode_deno/issues/557#issuecomment-986292261
await new Promise(resolve => setTimeout(resolve, 2000));

Deno.test('[3,2,0,-4], 1', () => {
  const list = ArrayToList([3, 2, 0, -4]);
  const wrapped_node = list.next;
  FindTail(list).next = wrapped_node;
  assertEquals(solution(list), wrapped_node);
});

Deno.test('[1,2], 0', () => {
  const list = ArrayToList([1, 2]);
  const wrapped_node = list;
  FindTail(list).next = wrapped_node;
  assertEquals(solution(list), wrapped_node);
});

Deno.test('[1], -1', () => {
  const list = ArrayToList([1]);
  assertEquals(solution(list), null);
});

Deno.test('[], -1', () => {
  assertEquals(solution(null), null);
});
