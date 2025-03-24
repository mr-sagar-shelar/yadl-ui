import React, { FC } from "react";
  import AppFlow from "../AppFlow";
  
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
        <AppFlow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  