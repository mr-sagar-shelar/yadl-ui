import React, { FC } from "react";
  import Arduino from "../Arduino";
  
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
        <Arduino width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  