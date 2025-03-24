import React, { FC } from "react";
  import Bug from "../Bug";
  
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
        <Bug width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  