import React, { FC } from "react";
  import VMwareCloudonAWS from "../VMwareCloudonAWS";
  
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
        <VMwareCloudonAWS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  