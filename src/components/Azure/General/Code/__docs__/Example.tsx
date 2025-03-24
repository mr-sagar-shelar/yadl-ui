import React, { FC } from "react";
  import Code from "../Code";
  
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
        <Code width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  