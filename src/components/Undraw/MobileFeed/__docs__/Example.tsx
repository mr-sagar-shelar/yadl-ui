import React, { FC } from "react";
  import MobileFeed from "../MobileFeed";
  
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
        <MobileFeed width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  