#!/usr/bin/env bash

# @lc app=leetcode id=195 lang=bash
#
# [195] Tenth Line

# @lc code=start
# Read from the file file.txt and output the tenth line to stdout.
sed '10q;d' file.txt
# @lc code=end
