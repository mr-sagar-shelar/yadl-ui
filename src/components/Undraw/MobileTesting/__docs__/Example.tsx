import React, { FC } from "react";
  import MobileTesting from "../MobileTesting";
  
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
        <MobileTesting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  