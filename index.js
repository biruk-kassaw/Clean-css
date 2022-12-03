const {CssParser} = require("./parsers/CssParser");
const {HtmlParser} = require("./parsers/HtmlParser");
const {trimSelector, removePsudoSelectors} = require("./utils/TrimString");

(async () => {
  const parsedHtml = await HtmlParser("./seo-agency-website-template/seo-agency-website-template/index.html")
  const parsedCSS = await CssParser("./seo-agency-website-template/seo-agency-website-template/css/sample.css")

  usedCss = []
  usedATCss = []
  atCss = []
  notUsedCss = []
  normalCss = []
  extractedAtusedCss = []
  extractedusedCss = []

  
  parsedCSS.forEach(element => {
    // trim element.selector to remove /n 
    let trimedSelector = trimSelector(element.selector);

    // check if it is an at selector
    if(trimedSelector.startsWith("@")){
      // check if it has type => it is alredy parsed by the parser
      if(! element.type){
        // if it does not have a type we have to separate it and parse it when we get a semicolon 
        let tempSelector = ""
        for (let char = 0; char < trimedSelector.length; char++) {
          if (trimedSelector[char] == ";") {
            let newAtRule = {selector: tempSelector + ";", type : "udn", styles: tempSelector + ";"}
            extractedAtusedCss.push(newAtRule)
            usedCss.push(newAtRule)
            tempSelector = ""
          }else{
            tempSelector += trimedSelector[char]
              if (char == trimedSelector.length -1) {
                let = newRule = {selector: tempSelector, rules: element.rules}
                // check if this rule exists inside html add it used else add it to unused
                extractedusedCss.push(newRule)
                usedCss.push(newRule)
              }
            }
          }
          
        }
      else{
        normalCss.push(element)
        usedCss.push(element)
      }
    }else if(trimedSelector.startsWith(':')){
      usedATCss.push(element)
      usedCss.push(element)
    }else{
      // check for psuedo selectors and remove them
      if(trimedSelector.includes(":")){
        trimedSelector = removePsudoSelectors(trimedSelector)
      }
      // check if the selector is used using query selector
      if (parsedHtml.window.document.querySelector(trimedSelector)) {
        usedCss.push(element)
      } else {
        notUsedCss.push(element)
      }
    }
  });
  console.log("used css")
  console.log(usedCss)
  console.log("not used css")
  console.log(notUsedCss)
})();
