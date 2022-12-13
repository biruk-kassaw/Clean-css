import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
      <div class="form-floating">
        <textarea
          className=" textArea form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">{this.props.label}</label>
      </div>
    );
  }
}

export default TextArea;
