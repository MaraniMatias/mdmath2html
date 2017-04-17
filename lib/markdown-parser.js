module.exports = function(markdownText) {
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
  md.use(require('markdown-it-html5-embed'));

  return md.render(markdownText);
};
