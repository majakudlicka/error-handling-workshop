const validateFilename = filename => {
  try {
    if (typeof filename !== 'string') {
      throw new Error('Filename must be a string');
    }

    return {isValid: true};
  } catch (e) {
    return {isValid: false, message: e.message};
  }
};

module.exports = validateFilename;
