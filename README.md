# Markdown Math to HTML file.
Convert Markdown files with math annotations to HTML files.

## Global installation

```sh
npm install -g mdmath2html
mdtohtml file.md
```

## Options:
Usage `mdtohtml [options] <file ...>`
* `-t, --title` Title of HTML file. *default:* Markdown file name.
* `-o, --outDir` Directory where to save the files. *default:* Same director of the markdown file.
* `-f, --force` Ignore file format.

## Installation for your project.
```
npm install mdmath2html --save
```

```javascript
var fs = require('fs');
var mdmath2html = require('../index.js');

var mdFile = fs.readFileSync('./latex.md');

var htmlFile = mdmath2html.render(mdFile.toString(),'Markdown to Html.');

fs.writeFile('mk2html.html',htmlFile,'utf8',function(err){
  if (err) throw err;
  console.log('The file has been saved!');
});
```
