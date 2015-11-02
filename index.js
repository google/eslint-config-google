'use strict';
var deepAssign = require('deep-assign');
var xo = require('eslint-config-xo');

module.exports = deepAssign(xo, {
  globals: {
    goog: true
  },
  rules: {
    'indent': [2, 2, {
      SwitchCase: 1
    }],
    'space-before-function-paren': [2, 'never'],
    'valid-jsdoc': [2, {
      requireReturn: false,
      prefer: {
        returns: 'return'
      }
    }],
    'require-jsdoc': 1,
    'max-len': [1, 80, 4, {
      ignoreComments: true,
      ignoreUrls: true
    }]
  }
});
