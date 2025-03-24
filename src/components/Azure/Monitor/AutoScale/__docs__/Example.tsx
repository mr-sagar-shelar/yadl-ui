import React, { FC } from "react";
  import AutoScale from "../AutoScale";
  
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
        <AutoScale width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  