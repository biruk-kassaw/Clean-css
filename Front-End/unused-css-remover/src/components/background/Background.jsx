import React, { Component } from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config";

class Background extends Component {
  render() {
    return (
      <>
        <Particles params={particleConfig}></Particles>
      </>
    );
  }
}

export default Background;
