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

'use strict';

module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset that aren't specifically
    //   mentioned by the google styleguide are listed but commented out (so
    //   they don't override a base ruleset).
    // - Rules that are recommended but contradict the Google styleguide
    //   are explicitly set to the Google styleguide value.

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    // 'for-direction': 'off',
    // 'no-await-in-loop': 'off',
    // 'no-compare-neg-zero': 'error', // eslint:recommended
    'no-cond-assign': 'off', // eslint:recommended
    // 'no-console': 'error', // eslint:recommended
    // 'no-constant-condition': 'error', // eslint:recommended
    // 'no-control-regex': 'error', // eslint:recommended
    // 'no-debugger': 'error', // eslint:recommended
    // 'no-dupe-args': 'error', // eslint:recommended
    // 'no-dupe-keys': 'error', // eslint:recommended
    // 'no-duplicate-case': 'error', // eslint:recommended
    // 'no-empty': 'error', // eslint:recommended
    // 'no-empty-character-class': 'error', // eslint:recommended
    // 'no-ex-assign': 'error', // eslint:recommended
    // 'no-extra-boolean-cast': 'error', // eslint:recommended
    // 'no-extra-parens': 'off',
    // 'no-extra-semi': 'error', // eslint:recommended
    // 'no-func-assign': 'error', // eslint:recommended
    // 'no-inner-declarations': 'error', // eslint:recommended
    // 'no-invalid-regexp': 'error', // eslint:recommended
    'no-irregular-whitespace': 'error', // eslint:recommended
    // 'no-obj-calls': 'error', // eslint:recommended
    // 'no-prototype-builtins': 'off',
    // 'no-regex-spaces': 'error', // eslint:recommended
    // 'no-sparse-arrays': 'error', // eslint:recommended
    // 'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error', // eslint:recommended
    // 'no-unreachable': 'error', // eslint:recommended
    // 'no-unsafe-finally': 'error', // eslint:recommended
    // 'no-unsafe-negation': 'off',
    // 'use-isnan': 'error' // eslint:recommended
    // 'valid-typeof': 'error' // eslint:recommended


    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    // 'accessor-pairs': 'off',
    // 'array-callback-return': 'off',
    // 'block-scoped-var': 'off',
    // 'class-methods-use-this': 'off',
    // 'complexity': 'off',
    // 'consistent-return': 'off'
    // TODO(philipwalton): add an option to enforce braces with the
    // exception of simple, single-line if statements.
    'curly': ['error', 'multi-line'],
    // 'default-case': 'off',
    // 'dot-location': 'off',
    // 'dot-notation': 'off',
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': 'error',
    // 'no-alert': 'off',
    'no-caller': 'error',
    // 'no-case-declarations': 'error', // eslint:recommended
    // 'no-div-regex': 'off',
    // 'no-else-return': 'off',
    // 'no-empty-function': 'off',
    // 'no-empty-pattern': 'error', // eslint:recommended
    // 'no-eq-null': 'off',
    // 'no-eval': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // 'no-extra-label': 'off',
    // 'no-fallthrough': 'error', // eslint:recommended
    // 'no-floating-decimal': 'off',
    // 'no-global-assign': 'off',
    // 'no-implicit-coercion': 'off',
    // 'no-implicit-globals': 'off',
    // 'no-implied-eval': 'off',
    'no-invalid-this': 'error',
    // 'no-iterator': 'off',
    // 'no-labels': 'off',
    // 'no-lone-blocks': 'off',
    // 'no-loop-func': 'off',
    // 'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    // 'no-new': 'off',
    // 'no-new-func': 'off',
    'no-new-wrappers': 'error',
    // 'no-octal': 'error', // eslint:recommended
    // 'no-octal-escape': 'off',
    // 'no-param-reassign': 'off',
    // 'no-proto': 'off',
    // 'no-redeclare': 'error', // eslint:recommended
    // 'no-restricted-properties': 'off',
    // 'no-return-assign': 'off',
    // 'no-script-url': 'off',
    // 'no-self-assign': 'error', // eslint:recommended
    // 'no-self-compare': 'off',
    // 'no-sequences': 'off',
    'no-throw-literal': 'error', // eslint:recommended
    // 'no-unmodified-loop-condition': 'off',
    // 'no-unused-expressions': 'off',
    // 'no-unused-labels': 'error', // eslint:recommended
    // 'no-useless-call': 'off',
    // 'no-useless-concat': 'off',
    // 'no-useless-escape': 'off',
    // 'no-void': 'off',
    // 'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    // 'radix': 'off',
    // 'require-await': 'off',
    // 'vars-on-top': 'off',
    // 'wrap-iife': 'off',
    // 'yoda': 'off',

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'strict': 'off',

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 'off',
    // 'no-catch-shadow': 'off',
    // 'no-delete-var': 'error', // eslint:recommended
    // 'no-label-var': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-shadow': 'off',
    // 'no-shadow-restricted-names': 'off',
    // 'no-undef': 'error', // eslint:recommended
    // 'no-undef-init': 'off',
    // 'no-undefined': 'off',
    'no-unused-vars': ['error', {args: 'none'}], // eslint:recommended
    // 'no-use-before-define': 'off',

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 'off',
    // 'global-require': 'off',
    // 'handle-callback-err': 'off',
    // 'no-buffer-constructor': 'off',
    // 'no-mixed-requires': 'off',
    // 'no-new-require': 'off',
    // 'no-path-concat': 'off',
    // 'no-process-env': 'off',
    // 'no-process-exit': 'off',
    // 'no-restricted-modules': 'off',
    // 'no-sync': 'off',

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-newline': 'off', // eslint:recommended
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off', // eslint:recommended
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': ['error', {properties: 'never'}],
    // 'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    // 'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    // 'func-name-matching': 'off',
    // 'func-names': 'off',
    // 'func-style': 'off',
    // 'id-blacklist': 'off',
    // 'id-length': 'off',
    // 'id-match': 'off',
    'indent': [
      'error', 2, {
        'CallExpression': {
          'arguments': 2,
        },
        'FunctionDeclaration': {
          'body': 1,
          'parameters': 2,
        },
        'FunctionExpression': {
          'body': 1,
          'parameters': 2,
        },
        'MemberExpression': 2,
        'ObjectExpression': 1,
        'SwitchCase': 1,
        'ignoredNodes': [
          'ConditionalExpression',
        ],
      },
    ],
    // 'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    // 'line-comment-position': 'off',
    'linebreak-style': 'error',
    // 'lines-around-comment': 'off',
    // 'max-depth': 'off',
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: 'goog\.(module|require)',
    }],
    // 'max-lines': 'off',
    // 'max-nested-callbacks': 'off',
    // 'max-params': 'off',
    // 'max-statements': 'off',
    // 'max-statements-per-line': 'off',
    // TODO(philipwalton): add a rule to enforce the operator appearing
    // at the end of the line.
    // 'multiline-ternary': 'off',
    'new-cap': 'error',
    // 'new-parens': 'off',
    // 'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    // 'no-bitwise': 'off',
    // 'no-continue': 'off',
    // 'no-inline-comments': 'off',
    // 'no-lonely-if': 'off',
    // 'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    // 'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', {max: 2}],
    // 'no-negated-condition': 'off',
    // 'no-nested-ternary': 'off',
    'no-new-object': 'error',
    // 'no-plusplus': 'off',
    // 'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    // 'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    // 'no-underscore-dangle': 'off',
    // 'no-unneeded-ternary': 'off',
    // 'no-whitespace-before-property': 'off',
    // 'nonblock-statement-body-position': 'off',
    // 'object-curly-newline': 'off',
    'object-curly-spacing': 'error',
    // 'object-property-newline': 'off',
    'one-var': ['error', {
      var: 'never',
      let: 'never',
      const: 'never',
    }],
    // 'one-var-declaration-per-line': 'off',
    // 'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    // 'padding-line-between-statements': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'semi': 'error',
    'semi-spacing': 'error',
    // 'semi-style': 'off',
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    // 'space-in-parens': 'off',
    // 'space-infix-ops': 'off',
    // 'space-unary-ops': 'off',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    // 'template-tag-spacing': 'off',
    // 'unicode-bom': 'off',
    // 'wrap-regex': 'off',

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 'off',
    // TODO(philipwalton): technically arrow parens are optional but
    // recommended. ESLint doesn't support a *consistent* setting so
    // "always" is used.
    'arrow-parens': ['error', 'always'],
    // 'arrow-spacing': 'off',
    'constructor-super': 'error', // eslint:recommended
    'generator-star-spacing': ['error', 'after'],
    // 'no-class-assign': 'off',
    // 'no-confusing-arrow': 'off',
    // 'no-const-assign': 'off', // eslint:recommended
    // 'no-dupe-class-members': 'off', // eslint:recommended
    // 'no-duplicate-imports': 'off',
    'no-new-symbol': 'error', // eslint:recommended
    // 'no-restricted-imports': 'off',
    'no-this-before-super': 'error', // eslint:recommended
    // 'no-useless-computed-key': 'off',
    // 'no-useless-constructor': 'off',
    // 'no-useless-rename': 'off',
    'no-var': 'error',
    // 'object-shorthand': 'off',
    // 'prefer-arrow-callback': 'off',
    'prefer-const': ['error', {destructuring: 'all'}],
    // 'prefer-destructuring': 'off',
    // 'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    // 'prefer-template': 'off',
    // 'require-yield': 'error', // eslint:recommended
    'rest-spread-spacing': 'error',
    // 'sort-imports': 'off',
    // 'symbol-description': 'off',
    // 'template-curly-spacing': 'off',
    'yield-star-spacing': ['error', 'after'],
  },
};
