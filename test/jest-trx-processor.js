var builder = require('jest-trx-results-processor');
var fs = require('fs');
var dir = './test/coverage';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

var processor = builder({
  outputFile: './test/coverage/test-results.trx'
});

module.exports = processor;
