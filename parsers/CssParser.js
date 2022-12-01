const {readFile} = require("../utils/ReadFile");
var cssjs = require("./css.js");


exports.CssParser = async (cssFileAdress) =>{
  try {
    const cssString = await readFile(cssFileAdress);
    var parser = new cssjs.cssjs();
    var parsed = parser.parseCSS(cssString);
    // console.log(parsed)
    return parsed
    
  } catch (err) {
    throw(err);
  }
}

