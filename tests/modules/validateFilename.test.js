'use strict';

const tape = require('tape');
const validateFilename = require('../../modules/validateFilename.js');

tape('validateFilename function validates the string correctly', t => {
  const result = validateFilename({});
  t.equal(
    result.message,
    'Filename must be a string',
    'Correct error message is supplied when we pass in an object'
  );
  t.notOk(result.isValid, 'Valid string returns false');
  t.end();
});

tape(
  'validateFilename function validates the string correctly. We are testing the isValid parameter',
  t => {
    const result = validateFilename('wfsdvrwhbfdv');
    t.ok(result.isValid, 'Valid string returns true');
    t.end();
  }
);
