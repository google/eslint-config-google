/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const path = require("path");
const assert = require("assert");
const { ESLint } = require("eslint");

// Runs the linter on the repo files and asserts no errors were found.
(async function main() {
  const eslint = new ESLint({
    overrideConfigFile: "test/test-config.mjs",
  });

  const testValid = await eslint.lintFiles(["test/test-valid.js"]);
  const testInvalid = await eslint.lintFiles(["test/test-invalid.js"]);

  function printResult(result) {
    const relativePath = path.relative(process.cwd(), result.filePath);
    console.log(`\n🔍 Checking: ${relativePath}`);
    if (result.messages.length > 0) {
      console.log("⚠️  Issues found:");
      result.messages.forEach((msg) => {
        console.log(
          `  ${relativePath}:${msg.line}:${msg.column} ${msg.message} (${msg.ruleId})`
        );
      });
    } else {
      console.log("✅ No issues found.");
    }
  }

  const validResult = testValid[0];
  const invalidResult = testInvalid[0];

  printResult(validResult);
  printResult(invalidResult);

  let success = true;

  if (validResult.errorCount > 0 || validResult.warningCount > 0) {
    console.error("\n❌ test-valid.js should have no errors or warnings.");
    success = false;
  }

  if (invalidResult.errorCount === 0 && invalidResult.warningCount === 0) {
    console.error("\n❌ test-invalid.js should have errors or warnings.");
    success = false;
  }

  if (!success) {
    console.error("\n❌ Lint tests failed.");
    process.exit(1);
  } else {
    console.log("\n✅ All tests passed as expected.");
  }
})();
