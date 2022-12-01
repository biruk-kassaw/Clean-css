const {CssParser} = require("./parsers/CssParser");
const {HtmlParser} = require("./parsers/HtmlParser");

(async () => {
  const parsedHtml = await HtmlParser("./seo-agency-website-template/seo-agency-website-template/index.html")
  const parsedCSS = await CssParser("./seo-agency-website-template/seo-agency-website-template/css/bootstrap.css")

  console.log(parsedHtml.window.document.querySelector("p").textContent)

})();
