const validateFilename = filename => {
  try {
    if (typeof filename !== 'string') {
      throw new Error('Filename must be a string');
    }

    if (filename.length > 30) {
      throw new Error('Filename too long');
    }
    return {isValid: true};
  } catch (e) {
    console.log(e.message);
    return {isValid: false, message: e.message};
  }
};

module.exports = validateFilename;
