import React, { FC } from "react";
  import MobileProfile from "../MobileProfile";
  
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
        <MobileProfile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  