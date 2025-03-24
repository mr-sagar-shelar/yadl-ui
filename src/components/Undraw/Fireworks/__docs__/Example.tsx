import React, { FC } from "react";
  import Fireworks from "../Fireworks";
  
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
        <Fireworks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  