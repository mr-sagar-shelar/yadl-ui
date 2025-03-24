import React, { FC } from "react";
  import HTML from "../HTML";
  
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
        <HTML width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  