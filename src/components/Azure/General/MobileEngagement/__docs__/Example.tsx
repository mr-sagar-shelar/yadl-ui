import React, { FC } from "react";
  import MobileEngagement from "../MobileEngagement";
  
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
        <MobileEngagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  