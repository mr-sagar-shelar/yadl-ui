import React, { FC } from "react";
  import Django from "../Django";
  
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
        <Django width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  