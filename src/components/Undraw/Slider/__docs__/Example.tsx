import React, { FC } from "react";
  import Slider from "../Slider";
  
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
        <Slider width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  