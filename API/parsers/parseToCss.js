
// function to change the selector object to string
const parseElement = (element) => {
    s = ""
    s += `${element.selector} { \n`
    element.rules.forEach(rule => {
        s += `${rule.directive}  : ${ rule.value} \n`
    });
    s += "}\n"
    return s
}

exports.parseToString = (css) => {
    let cssString = ""
    css.forEach(element => {
        if (element.styles) {
            cssString += element.styles + "\n";
        }else if (element.subStyles){
            // media query
            cssString += `${element.selector} { \n`
            element.subStyles.forEach(rule => {
               cssString += `${parseElement(rule)}`
            });
            cssString += "\n}"
        }else if(element.rules){
            cssString += parseElement(element)
        }else{
            // unknown css
            console.log("*************************************************unknown************************************8")
        }
    });

    return cssString
}
// let sample = [
//     {
//     selector: "@keyframes",
//     type: "keyframes",
//     styles: "@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}"
//     },
//     {
//         selector: "p",
//         rules: [
//           {
//             directive: "margin-top",
//             value: "0"
//           },
//           {
//             directive: "margin-bottom",
//             value: "1rem"
//           }
//         ]
//     },
//     {
//         selector: "@media (min-width: 1200px)",
//         type: "media",
//         subStyles: [
//           {
//             selector: ".display-1",
//             rules: [
//               {
//                 directive: "font-size",
//                 value: "5rem"
//               }
//             ]
//           }
//         ]
//       }
// ]
// console.log(this.parseToString(sample));