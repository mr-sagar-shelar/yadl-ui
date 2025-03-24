import React, { FC } from "react";
  import FastLoading from "../FastLoading";
  
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
        <FastLoading width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  