import React, { FC } from "react";
  import CloudCode from "../CloudCode";
  
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
        <CloudCode width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  