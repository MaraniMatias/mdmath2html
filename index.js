var fs = require("fs");

var hljs = require('highlight.js');
var md = require('markdown-it')({
  html: true,
  linkify: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}
    return ''; // use external default escaping
  }
});
md.use(require('markdown-it-mathjax')());
md.use(require('markdown-it-sub'));
md.use(require('markdown-it-html5-embed'));

var htmlBase = `<!DOCTYPE html>
  <html>
  <head>
  <title>MathJax TeX Test Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./node_modules/github-markdown-css/github-markdown.css">
  <style>.markdown-body {box-sizing: border-box;min-width: 200px;margin: 0 auto;padding: 45px;}</style>
  <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_HTMLorMML"></script>
  </head>
  <body class="markdown-body">`;
var htmlBase1 = "</body></html>";

fs.readFile('./test.md', function(err, data) {
  if (err) throw err;
  fs.writeFile("./test.html", htmlBase + md.render(data.toString()) + htmlBase1, 'utf8');
});
fs.readFile('./latex.md', function(err, data) {
  if (err) throw err;
  fs.writeFile("./latex.html", htmlBase +md.render(data.toString() + htmlBase1), 'utf8');
});
fs.readFile('./source.md', function(err, data) {
  if (err) throw err;
  fs.writeFile("./source.html", htmlBase +md.render(data.toString() + htmlBase1), 'utf8');
});

// Error
process.on('uncaughtException', function(err) {
    console.error("Exception", err.stack);
});
