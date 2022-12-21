import React, { Component } from "react";
import TextArea from "./TextArea";
import { getOptimizedCss } from "../services/Remover";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Form extends Component {
  state = {
    html: "<p>h</p>",
    css: "a{f:j}",
    optimizedCss: "ans",
    loading: false,
    error: "",
  };

  notify = () => toast("copied to clipboard");

  handleChange = (e) => {
    let current = { ...this.state };
    current[e.currentTarget.name] = e.currentTarget.value;
    this.setState(current);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // send it to the server and make the response into the optimized css
    this.setState({ loading: true });
    try {
      let response = await getOptimizedCss(this.state.html, this.state.css);
      let optimizedCss = response.data.usedCss;

      this.setState({ optimizedCss: optimizedCss, loading: false });
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        this.setState({ error: error.response.data.error, loading: false });
      } else {
        alert("Internal server error please try again later");
        this.setState({ loading: false });
      }
    }
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

            {this.state.error && (
              <div
                class="alert alert-danger d-flex align-items-center container mt-3"
                role="alert"
              >
                <div>{this.state.error}</div>
              </div>
            )}
          </div>

          <div className="container text-center mt-3 mb-3">
            <button className="btn  my-button" disabled={this.state.loading}>
              {this.state.loading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Clean Up Css
            </button>
          </div>
        </form>

        <div className="container">
          <div className="bottom-container">
            <h6 className="mb-3">Your Clean Css</h6>
            <TextArea
              label="Your Clean CSS"
              name="optimizedCss"
              onChange={this.handleChange}
              value={this.state.optimizedCss}
            />
            <div className="container text-center mt-3">
              <button
                className="btn my-button"
                onClick={() => {
                  navigator.clipboard.writeText(this.state.optimizedCss);
                  this.notify();
                }}
              >
                Copy To Clipboard
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}

export default Form;
