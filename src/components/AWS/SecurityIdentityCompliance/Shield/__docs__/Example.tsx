import React, { FC } from "react";
  import Shield from "../Shield";
  
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
        <Shield width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  