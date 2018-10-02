"use strict";
const fs = require("fs");
const mdmath2html = require("../index.js");

var mdFile = fs.readFileSync("./test.md");

var htmlFile = mdmath2html.render(mdFile.toString(), "Markdown to Html.");

fs.writeFile("mk2html.html", htmlFile, "utf8", function(err) {
  if (err) {
    throw err;
  }
  console.log("The file has been saved!");
});
