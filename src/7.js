var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
const path = require('path');

// console.log(__path + '/7.txt');
var instream = fs.createReadStream(path.join(__dirname, './7.txt'));
var outstream = new stream();
var stream = readline.createInterface(instream, outstream);

stream.on('line', function(line) {
  console.log(line);
});

stream.on('close', function() {
  console.log('done');
});
