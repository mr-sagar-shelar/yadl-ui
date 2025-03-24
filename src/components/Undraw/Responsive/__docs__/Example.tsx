import React, { FC } from "react";
  import Responsive from "../Responsive";
  
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
        <Responsive width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  