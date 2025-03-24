import React, { FC } from "react";
  import PrivateServiceConnect from "../PrivateServiceConnect";
  
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
        <PrivateServiceConnect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  