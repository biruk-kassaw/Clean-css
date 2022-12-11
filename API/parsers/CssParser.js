const {readFile} = require("../utils/ReadFile");
let cssjs = require("./css.js");


exports.CssParser = async (cssFileAdress, isfile) =>{
  try {
    let cssString = cssFileAdress
    if (isfile) {
      cssString = await readFile(cssFileAdress);      
    }
    let parser = new cssjs.cssjs();
    let parsed = parser.parseCSS(cssString);
    // console.log(parsed)
    return parsed
    
  } catch (err) {
    throw(err);
  }
}

