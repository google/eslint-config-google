/**
 * Copyright 2015 Google Inc. All rights reserved.
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
import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import conf from '../';

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

test('main', t => {
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('\'use strict\';\nconsole.log("unicorn")\nvar foo = function () {};\nfoo();\n', conf);
  t.is(errors[0].ruleId, 'quotes');
  t.is(errors[1].ruleId, 'semi');
  t.is(errors[2].ruleId, 'space-before-function-paren');

  t.end();
});
