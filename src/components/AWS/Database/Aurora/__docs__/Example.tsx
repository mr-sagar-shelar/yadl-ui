import React, { FC } from "react";
  import Aurora from "../Aurora";
  
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
        <Aurora width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  