var fs = require("fs");
var path = require("path");
var program = require('commander')
  .version(require('./package.json').version)
  .usage('[options] <file ...>')
  .option('-t, --title', 'Title of file', 'markdown to html')
  .option('-f, --force', 'Ignore file format', '/^(md|mdtex|markdown)$/i')
  .parse(process.argv);
var build = require('./build.js');

console.log('Markdown File: %j', program.args[0]);
console.log(program.title);
fs.readFile(program.args[0], function(err, data) {
  if (err) throw err;
  var file = path.parse(program.args[0]);
  fs.writeFile(file.name+'.html', build(data.toString(), program.title || 'markdown to html'), 'utf8');
});

// Error
process.on('uncaughtException', function(err) {
  console.error("Exception", err.stack);
});
