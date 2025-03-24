import React, { FC } from "react";
  import Jest from "../Jest";
  
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
        <Jest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  