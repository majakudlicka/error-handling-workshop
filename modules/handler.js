'use strict';

const createRecord = require('./createRecord.js');
const validateFilename = require('./validateFilename.js');

module.exports = (req, res, body) => {
  const payload = JSON.parse(body);
  var filename = payload.filename;
  var contents = payload.contents;

  const result = validateFilename(filename);
  if (!result.isValid) {
    res.writeHead(400, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(`Invalid parameters: ${result.message}`));
    return;
  }

  createRecord(filename, contents, (err, message) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({error: 'internal error'}));
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(message));
    }
  });
};
