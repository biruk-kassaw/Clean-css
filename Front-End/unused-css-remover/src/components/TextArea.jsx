import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
        <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
    );
  }
}

export default TextArea;
