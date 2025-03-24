import React, { FC } from "react";
  import ControlsHorizontal from "../ControlsHorizontal";
  
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
        <ControlsHorizontal width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  