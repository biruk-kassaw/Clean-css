# Clean CSS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="https://user-images.githubusercontent.com/61546383/209775850-3f0f2760-2c58-45fa-8a60-b019afcc8fc0.png" alt="Clean CSS Logo">
</p>

Clean CSS is a tool that analyzes a webpage's HTML and CSS to determine which CSS rules are actually used. It removes unused styles and returns a clean, optimized stylesheet.

This project includes both a REST API and a web interface for cleaning CSS.

## Features

* 🚀 Detects CSS rules that are actually used
* 🧹 Removes unused CSS
* 🌐 REST API for programmatic usage
* 💻 Simple web interface
* ⚡ Fast and easy to use

---

## API

You can use the API by sending a `POST` request containing your HTML and CSS.

**Endpoint**

```
https://clean-css-ol7w.onrender.com/api/v1/remove-unused-css
```

### Request

```json
{
  "html": "<p>Hello</p>",
  "css": "p { color: red; }"
}
```

### Example (Axios)

```javascript
import axios from "axios";

axios
  .post("https://clean-css-ol7w.onrender.com/api/v1/remove-unused-css", {
    html: "<p>Hello</p>",
    css: "p { color: red; }",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## Web Application

You can also use Clean CSS directly from your browser:

**Website**

https://comfy-syrniki-a32afb.netlify.app/

### 1. Paste your HTML and CSS

Copy and paste your HTML and CSS into the provided editors.

![Paste HTML and CSS](https://user-images.githubusercontent.com/61546383/209780982-5fe044d2-1e86-4b34-9407-03280a2a92e5.png)

### 2. Click **Clean Up CSS**

The application analyzes your code and removes unused CSS rules.

![Clean Up CSS](https://user-images.githubusercontent.com/61546383/209781483-ff239038-915b-48dd-9b8c-cb13ef5986de.png)

### 3. Copy the optimized CSS

Your cleaned stylesheet is displayed and ready to use.

![Optimized CSS](https://user-images.githubusercontent.com/61546383/209781549-1b481f37-96ad-4d5e-bb2d-e99ac1a66b3f.png)

---

## Limitations

Clean CSS executes only the JavaScript that runs during the initial page load.

JavaScript that modifies the DOM after user interactions (such as clicking buttons, opening menus, or loading content dynamically) is **not** executed. As a result, CSS used exclusively by those interactions may be considered unused.

---

## Repository

This repository contains the source code for both:

* The REST API
* The web application

---

## License

This project is licensed under the MIT License.
