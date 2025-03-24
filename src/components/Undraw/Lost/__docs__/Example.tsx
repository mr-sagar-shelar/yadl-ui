import React, { FC } from "react";
  import Lost from "../Lost";
  
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
        <Lost width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  