import React, { Component } from "react";
import Particles from "particlesjs";

class Background extends Component {
  render() {
    return (
      <Particles
        options={{
          maxParticles: 200,
          color: "black",
          connectParticles: false,
        }}
      />
    );
  }
}

export default Background;
