import React, { FC } from "react";
  import WindiCSS from "../WindiCSS";
  
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
        <WindiCSS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  