var fs = require("fs");
var path = require("path");
var program = require('commander')
  .version(require('./package.json').version)
  .usage('[options] <file ...>')
  .option('-t, --title', 'Title of file')
  .option('-f, --force', 'Ignore file format', '/^(md|mdtex|markdown)$/i')
  .parse(process.argv);
var build = require('./build.js');

if (program.title) console.log('Title:', program.title);
for (var i = 0, f = program.args.length; i < f; i++) {
  render(program.args[i]);
}

function render(mdFile){
  var file = path.parse(mdFile);
  console.log('Markdown File %s to %s', file.base, file.name + '.html');
  fs.readFile(mdFile, function(err, data) {
    if (err) throw err;
    fs.writeFile(file.name + '.html', build(data.toString(), program.title || 'markdown to html'), 'utf8');
  });
}

// Error
process.on('uncaughtException', function(err) {
  console.error("Exception", err.stack);
});
