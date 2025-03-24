import React, { FC } from "react";
  import ControlTower from "../ControlTower";
  
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
        <ControlTower width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  