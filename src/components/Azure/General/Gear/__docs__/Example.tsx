import React, { FC } from "react";
  import Gear from "../Gear";
  
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
        <Gear width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  