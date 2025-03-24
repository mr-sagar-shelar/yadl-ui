import React, { FC } from "react";
  import MobileMessages from "../MobileMessages";
  
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
        <MobileMessages width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  