#!/usr/bin/env bash

set -e
source "$(dirname "$0")/../../helpers/test.sh"
cd "$(dirname "$0")"

echo "[test 12 lines]"
echo "1" > file.txt
echo "2" >> file.txt
echo "3" >> file.txt
echo "4" >> file.txt
echo "5" >> file.txt
echo "6" >> file.txt
echo "7" >> file.txt
echo "8" >> file.txt
echo "9" >> file.txt
echo "10" >> file.txt
echo "11" >> file.txt
echo "12" >> file.txt
assert "$(./solution.sh)" "10"

echo "[test 10 lines]"
echo "1" > file.txt
echo "2" >> file.txt
echo "3" >> file.txt
echo "4" >> file.txt
echo "5" >> file.txt
echo "6" >> file.txt
echo "7" >> file.txt
echo "8" >> file.txt
echo "9" >> file.txt
echo "10" >> file.txt
assert "$(./solution.sh)" "10"

echo "[test 9 lines]"
echo "1" > file.txt
echo "2" >> file.txt
echo "3" >> file.txt
echo "4" >> file.txt
echo "5" >> file.txt
echo "6" >> file.txt
echo "7" >> file.txt
echo "8" >> file.txt
echo "9" >> file.txt
assert "$(./solution.sh)" ""

rm file.txt
