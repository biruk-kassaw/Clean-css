import React, { Component } from "react";
import TextArea from "./TextArea";

class Form extends Component {
  state = {
    html: "",
    css: "",
    optimizedCss: "",
  };

  handleChange = (e) => {
    let current = { ...this.state };
    current[e.currentTarget.name] = e.currentTarget.value;
    this.setState(current);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // send it to the server and make the response into the optimized css

    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col">
                <TextArea
                  onChange={this.handleChange}
                  label="Insert Your HTML Here"
                  value={this.state.html}
                  name="html"
                />
              </div>
              <div className="col">
                <TextArea
                  onChange={this.handleChange}
                  label="Insert Your Css Here"
                  value={this.state.css}
                  name="css"
                />
              </div>
            </div>
          </div>

          <div className="container text-center mt-3 mb-3">
            <button className="btn btn-primary">Remove Unused Css</button>
          </div>
        </form>

        <div className="container">
          <h6 className="mb-3">Your Optimized Css</h6>
          <TextArea label="Your Optimized CSS" />
          <div className="container text-center mt-3">
            <button className="btn btn-primary">Copy To Clipboard</button>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
