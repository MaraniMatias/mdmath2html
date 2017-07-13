module.exports = function(markdownText, options) {
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
  md.use(require("markdown-it-anchor"), {
    level: 3,
    // slugify: string => string,
    permalink: true,
    // renderPermalink: (slug, opts, state, permalink) => {},
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false
  });
  md.use(require("markdown-it-table-of-contents"), options.tableContents);
  return md.render(markdownText);
};
