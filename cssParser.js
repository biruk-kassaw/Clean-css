
const fs = require('fs/promises');
var listSelectors = require('list-selectors');
var css = require('css');


async function getCss() {
  try {
    const cssString = await fs.readFile("./seo-agency-website-template/seo-agency-website-template/css/bootstrap.css", { encoding: 'utf8' });
    var cssjs = require("./css.js");
    var parser = new cssjs.cssjs();
    var parsed = parser.parseCSS(cssString);
    console.log(parsed);
    
    
    // filter parsed
    // if the current element starts with at leave it
    //  if not call query selector to check if it exists on the html
    used = []
    notUsed = []
    parsed.forEach(element => {
      if(element.selector.startsWith("@")){
        medias.push(element)
      }else{
        
      }

    });
    console.log(medias)





    // var obj = css.parse(cssString);
    // var result = css.stringify(obj,{ sourcemap: true });
    // var rules = obj.stylesheet.rules
    // let medias = rules.filter((selector)=>{
    //   return selector.selectors == [ '.blockquote > :last-child' ]
    // })
    // console.log(medias)
    
  } catch (err) {
    console.log(err);
  }
}

getCss();

