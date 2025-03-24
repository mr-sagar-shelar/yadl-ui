import React, { FC } from "react";
  import WellArchitectedTool from "../WellArchitectedTool";
  
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
        <WellArchitectedTool width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  