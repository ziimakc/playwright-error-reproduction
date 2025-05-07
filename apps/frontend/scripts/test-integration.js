#!/usr/bin/env zx

import { $ } from "zx";

const args = process.argv.slice(3);

await $`playwright test ${args}`.catch((err) => {
  console.log(err);
  process.exit(1);
});
