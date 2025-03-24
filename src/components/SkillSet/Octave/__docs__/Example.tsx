import React, { FC } from "react";
  import Octave from "../Octave";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Octave width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  