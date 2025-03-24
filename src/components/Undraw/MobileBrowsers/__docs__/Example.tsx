import React, { FC } from "react";
  import MobileBrowsers from "../MobileBrowsers";
  
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
        <MobileBrowsers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  