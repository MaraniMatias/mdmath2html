module.exports = function(markdownText, title) {
  var markdown2html = require('./markdown-parser.js');
  return '<!DOCTYPE html><html><head><title>'+title+'</title>' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<link rel="stylesheet" href="'+__dirname+'./node_modules/github-markdown-css/github-markdown.css">' +
    '<style>.markdown-body {box-sizing: border-box;min-width: 200px;margin: 0 auto;padding: 45px;}</style>' +
    '<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_HTMLorMML"></script>' +
    '</head><body class="markdown-body">'+markdown2html(markdownText)+'</body></html>';
};
