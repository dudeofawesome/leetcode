/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 */

export const _decodeString = decodeString;

// @lc code=start
function decodeString(input: string): string {
  let out = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i].match(/\d/)) {
      let sub = input.substring(i);

      const multiplier = (sub.match(/^\d+/) ?? [])[0];
      // skip over multiplier string
      i += multiplier.length;

      // reset substring to skip over the multiplier string
      sub = sub.substring(multiplier.length);

      // find characters grouped by brackets
      let bracket_group = '';
      let brackets = 0;
      for (let j = 0; j < sub.length; j++) {
        if (sub[j] === '[') brackets++;
        else if (sub[j] === ']') brackets--;

        if (brackets === 0) {
          bracket_group = sub.substring(1, j);
          break;
        }
      }

      let addition: string;
      if (bracket_group.match(/[\[\]]/) != null) {
        // there's a sub-group here, so recurse
        addition = decodeString(bracket_group);
      } else {
        addition = bracket_group;
      }
      // skip over parsed section of string
      i += bracket_group.length;

      // add parsed string x times to output
      out += addition.repeat(parseInt(multiplier, 10));
    } else if (input[i] != '[' && input[i] != ']') {
      out += input[i];
    }
  }

  return out;
}
// @lc code=end
