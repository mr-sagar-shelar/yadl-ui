import React, { FC } from "react";
  import Shopping from "../Shopping";
  
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
        <Shopping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  