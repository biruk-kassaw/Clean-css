const jsdom = require('jsdom');
const {readFile} = require("../utils/ReadFile");
const { JSDOM } = jsdom;

exports.HtmlParser = async(htmlFilePath,isfile) => {
  try {
    const html = htmlFilePath
    if (isfile) {
      html = await readFile(htmlFilePath);
    } 
    const dom = new JSDOM(html);
    
    return dom
  } catch (err) {
    throw(err);
  }
}

