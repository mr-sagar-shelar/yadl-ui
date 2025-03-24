import React, { FC } from "react";
  import CloudSpanner from "../CloudSpanner";
  
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
        <CloudSpanner width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  