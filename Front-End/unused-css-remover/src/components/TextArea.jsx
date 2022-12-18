import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
      <div className="form-floating">
        <textarea
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.name}
          className=" textArea form-control "
          id="floatingTextarea"
          style={{ height: "250px", fontFamily: "monospace" }}
        ></textarea>
        <label htmlFor="floatingTextarea">{this.props.label}</label>
      </div>
    );
  }
}

export default TextArea;
