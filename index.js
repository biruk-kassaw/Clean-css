const {CssParser} = require("./parsers/CssParser");
const {HtmlParser} = require("./parsers/HtmlParser");
const {trimSelector} = require("./utils/TrimString");
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

    if(trimedSelector.startsWith("@")){

      if(! element.type){
        let tempSelector = ""
        for (let char = 0; char < trimedSelector.length; char++) {
          if (trimedSelector[char] == ";") {
            let newAtRule = {selector: tempSelector + ";", type : "udn", styles: tempSelector + ";"}
            extractedAtusedCss.push(newAtRule)
            tempSelector = ""
          }else{
            tempSelector += trimedSelector[char]
              if (char == trimedSelector.length -1) {
                let = newRule = {selector: tempSelector, rules: element.rules}
                // check if this rule exists inside html add it used else add it to unused
                extractedusedCss.push(newRule)
              }
            }
          }
          
        }
      else{
        normalCss.push(element)
      }
    }else if(trimedSelector.startsWith(':')){
      usedATCss.push(element)
    }else{
      normalCss.push(element)
    }
  });
  console.log("extracted used css")
  console.log(extractedusedCss)
  console.log("extracted at used css")
  console.log(extractedAtusedCss)
  console.log("normal used css")
  console.log(normalCss)
  console.log("normal at used css")
  console.log(usedATCss)

})();
