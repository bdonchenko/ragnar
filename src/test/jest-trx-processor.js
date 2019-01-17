var builder = require('jest-trx-results-processor');
var fs = require('fs');
var dir = './build/coverage';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

var processor = builder({
  outputFile: './build/coverage/coverage.trx'
});

module.exports = processor;
