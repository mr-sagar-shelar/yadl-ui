import React, { FC } from "react";
  import MobileSite from "../MobileSite";
  
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
        <MobileSite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  