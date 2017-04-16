var fs = require("fs");
var program = require('commander')
  .version(require('./package.json').version)
//.option('-p, --peppers', 'Add peppers')
  .parse(process.argv);

//if (program.peppers) console.log('  - peppers');
//console.log('  - %s cheese', program.cheese);
console.log(' args: %j', program.args);

/*
fs.readFile('./test.md', function(err, data) {
  if (err) throw err;
  fs.writeFile("./test.html", htmlBase + md.render(data.toString()) + htmlBase1, 'utf8');
});
fs.readFile('./source.md', function(err, data) {
  if (err) throw err;
  fs.writeFile("./source.html", htmlBase +md.render(data.toString() + htmlBase1), 'utf8');
});
*/

// Error
process.on('uncaughtException', function(err) {
    console.error("Exception", err.stack);
});
