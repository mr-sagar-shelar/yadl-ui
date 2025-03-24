import React, { FC } from "react";
  import TestBase from "../TestBase";
  
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
        <TestBase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  