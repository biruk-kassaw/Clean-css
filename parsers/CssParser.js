const readFile = require("../utils/ReadFile");
var cssjs = require("./css.js");


exports.parsedCSS = async (cssFileAdress) =>{
  try {
    const cssString = await readFile(cssFileAdress);
    var parser = new cssjs.cssjs();
    var parsed = parser.parseCSS(cssString);
    console.log(parsed);
    return parsed
    
    // filter parsed
    // if the current element starts with at leave it
    //  if not call query selector to check if it exists on the html
    // used = []
    // notUsed = []
    // parsed.forEach(element => {
    //   if(element.selector.startsWith("@")){
    //     medias.push(element)
    //   }else{
        
    //   }

    // });
    // console.log(medias)

  } catch (err) {
    throw(err);
  }
}

