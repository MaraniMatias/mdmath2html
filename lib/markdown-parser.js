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
  md.use(require("markdown-it-anchor")); // Optional, but makes sense as you really want to link to something
  md.use(require("markdown-it-table-of-contents"));
  return md.render(markdownText);
};
