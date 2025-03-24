import React, { FC } from "react";
  import MobileLogin from "../MobileLogin";
  
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
        <MobileLogin width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  