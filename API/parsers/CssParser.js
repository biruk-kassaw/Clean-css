const {readFile} = require("../utils/ReadFile");
let cssjs = require("./css.js");
// const bootstrapLocal = require("../../API/seo-agency-website-template/seo-agency-website-template/css/bootstrap.css")

exports.CssParser = async (cssFileAdress, isfile) =>{
  try {
    // remove
    // cssFileAdress = "../../API/seo-agency-website-template/seo-agency-website-template/css/bootstrap.css";
    // isfile = true
    // this after testing

    let cssString = cssFileAdress
    if (isfile) {
      console.log(cssFileAdress)
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

