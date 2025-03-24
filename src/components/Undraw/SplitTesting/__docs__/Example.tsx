import React, { FC } from "react";
  import SplitTesting from "../SplitTesting";
  
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
        <SplitTesting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  