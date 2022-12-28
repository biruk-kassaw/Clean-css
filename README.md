# Clean-Css

<p align="center">
  <img src="https://user-images.githubusercontent.com/61546383/209775850-3f0f2760-2c58-45fa-8a60-b019afcc8fc0.png">
</p>


## What Is Clean-Css
When you are building a website, chances are that you are using a css framework like Bootstrap, Materializecss, etc... But you will only use a small set of the framework and a lot of unused css styles will be included.

This is where Clean-Css comes into play. Clean-Css analyzes your css. Then it matches the selectors used in your css files with your html files. It removes unused selectors from your css, resulting in smaller and optimized css file.

## Usage
### API
By sendeng a post request which contains the html and css as a string to this url:   https://clean-css-ol7w.onrender.com/api/v1/remove-unused-css     
#### Example using axios:
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
### Website
Go to this website:  https://comfy-syrniki-a32afb.netlify.app/
#### - Copy&paste your HTML and CSS into boxes as shown below
![Screenshot from 2022-12-28 11-16-53](https://user-images.githubusercontent.com/61546383/209780982-5fe044d2-1e86-4b34-9407-03280a2a92e5.png)

#### - Click Clean up css button 

![Screenshot from 2022-12-28 11-19-25](https://user-images.githubusercontent.com/61546383/209781483-ff239038-915b-48dd-9b8c-cb13ef5986de.png)
 
#### - Use your clean css
![Screenshot from 2022-12-28 11-20-14](https://user-images.githubusercontent.com/61546383/209781549-1b481f37-96ad-4d5e-bb2d-e99ac1a66b3f.png)

#### Please note: 
  Clean-Css only runs the Javascript that is run on page load. It does not (and cannot) handle Javascript that runs on user interactions like button clicks.
  
  
 The code for both the website and API can be found in this repository
