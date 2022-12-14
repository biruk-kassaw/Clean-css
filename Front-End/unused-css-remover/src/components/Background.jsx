import Particles from "particlesjs";
import React, { Component } from "react";

class Background extends Component {
  render() {
    return (
      <Particles
        options={{
          maxParticles: 200,
          color: "#48F2E3",
          connectParticles: false,
        }}
      />
    );
  }
}

export default Background;
