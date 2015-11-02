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
