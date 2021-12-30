#!/usr/bin/env bash

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
GRAY='\033[0;90m'
NC='\033[0m' # No Color

# test runner
# @param {string} actual - The actual value
# @param {string} expected - The expected value
function assert () {
  actual=$1
  expected=$2

  if [[ "$actual" == "$expected" ]]; then
    printf "${GREEN}ok${NC}\n"
  else
    printf "${RED}FAILED${NC}\n"
    printf "${GRAY}[Diff]${NC} ${RED}Actual${NC} / ${GREEN}Expected${NC}\n"
    printf "\"${RED}$actual${NC}\"\n"
    printf "\"${GREEN}$expected${NC}\"\n"
  fi
}
