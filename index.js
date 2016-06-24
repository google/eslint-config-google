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
'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: 'xo',
  globals: {
    goog: true
  },

  plugins: [
    'react'
  ],

  rules: {
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        prefer: {
          returns: 'return'
        }
      }
    ],
    'require-jsdoc': 'warn',
    'max-len': [
      'warn',
      80,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true
      }
    ],

    //  Resetting things that eslint-config-xo has an opinion about, but the
    //  Google Style Guide doesn't.
    'one-var': [
      'error',
      {
        uninitialized: 'always',
        initialized: 'never'
      }
    ],
    'curly': 'off',
    'no-floating-decimal': 'off',
    'padded-blocks': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],

    //  JSX support
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'jsx-quotes': [
      'warn',
      'prefer-single'
    ],
    'react/jsx-no-bind': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-max-props-per-line': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/wrap-multilines': 'error',
    'react/require-render-return': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': [
      'error',
      'always'
    ],
    'react/jsx-equals-spacing': [
      'error',
      'always'
    ],
    'react/jsx-curly-spacing': [
      'error',
      'always'
    ]
  }
};
