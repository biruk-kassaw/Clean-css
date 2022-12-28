# Clean-Css

![Screenshot from 2022-12-28 10-34-21](https://user-images.githubusercontent.com/61546383/209775850-3f0f2760-2c58-45fa-8a60-b019afcc8fc0.png)

## What Is Clean-Css
When you are building a website, chances are that you are using a css framework like Bootstrap, Materializecss, etc... But you will only use a small set of the framework and a lot of unused css styles will be included.

This is where Clean-Css comes into play. Clean-Css analyzes your css. Then it matches the selectors used in your css files with your html files. It removes unused selectors from your css, resulting in smaller and optimized css file.

## Usage
### API
By sendeng a post request which contains the html and css as a string to this url ***https://clean-css-ol7w.onrender.com/api/v1/remove-unused-css***     
####example using axios:
```js
axios.post('https://clean-css-ol7w.onrender.com/api/v1/remove-unused-css', {
    html: '<p>hello</p>',
    css: 'p{color: red;}'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
front end website

Please note: 
  UnCSS only runs the Javascript that is run on page load. It does not (and cannot) handle Javascript that runs on user interactions like button clicks.
  
## to run this project on your local machine
