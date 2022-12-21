const {CssParser} = require("./parsers/CssParser");
const {HtmlParser} = require("./parsers/HtmlParser");
const {trimSelector, removePsudoSelectors} = require("./utils/TrimString");
const {parseToString} = require("./parsers/parseToCss")


exports.removeUnusedCss = async (req, res) => {



  // parsing the html
  try {
    const parsedHtml = await HtmlParser(req.body.html, isfile=false)
    const parsedCSS = await CssParser(req.body.css, isfile=false)
    
    usedCss = []
    notUsedCss = []
    
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
              let newAtRule = {selector: tempSelector + ";", type : "udn", styles: tempSelector + ";\n"}
              usedCss.push(newAtRule)
              tempSelector = ""
            }else{
              tempSelector += trimedSelector[char]
                if (char == trimedSelector.length -1) {
                  let = newRule = {selector: tempSelector, rules: element.rules}
                  // check if this rule exists inside html add it used else add it to unused
                  usedCss.push(newRule)
                }
              }
            }
            
          }
        else{
          usedCss.push(element)
        }
      }else if(trimedSelector.startsWith(':')){
        usedCss.push(element)
      }else{
        // check for psuedo selectors and remove them

        if(trimedSelector.includes(":")){
          trimedSelector = removePsudoSelectors(trimedSelector)
        }
        // check if the selector is used using query selector
        try {
          
          if (parsedHtml.window.document.querySelector(trimedSelector)) {
            usedCss.push(element)
          } else {
            notUsedCss.push(element)
          }
        } catch (error) {
          usedCss.push(element)
        }
      }
    });
 
    res.status(200).json({
      status : "success",
      data:{ usedCss:parseToString(usedCss), notUsedCss:parseToString(notUsedCss)}
    })
} catch (error) {
  return res.status(400).json({
    status: "failed",
    error: error
  })
}
}
