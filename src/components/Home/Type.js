import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `<span style="color: #ffcbc4;">FullStack Developer</span>`,
          `<span style="color: #ffcbc4;">Web3 Developer</span>`,
          `<span style="color: #ffcbc4;">Android Developer</span>`,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
