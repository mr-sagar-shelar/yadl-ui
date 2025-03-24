import React, { FC } from "react";
  import Cancel from "../Cancel";
  
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
        <Cancel width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  