import React, { FC } from "react";
  import Swift from "../Swift";
  
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
        <Swift width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  