const validateFilename = filename => {
  if (typeof filename !== 'string') {
    throw new TypeError('Filename must be a string');
  }

  if (filename.length > 30) {
    throw new RangeError('Filename too long');
  }

  if (/\.\./g.test(filename)) {
    throw new Error('Directory traversal not permitted');
  }
};

module.exports = validateFilename;
