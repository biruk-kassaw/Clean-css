const jsdom = require('jsdom');
const readFile = require("../utils/ReadFile");
const { JSDOM } = jsdom;

exports.parsedHtml = async(htmlFilePath) => {
  try {
    const html = await readFile(htmlFilePath);
    const dom = new JSDOM(html);
    const p = dom.window.document.querySelector("p")
    
    return dom
  } catch (err) {
    throw(err);
  }
}

