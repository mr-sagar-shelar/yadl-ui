import React, { FC } from "react";
  import Solutions from "../Solutions";
  
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
        <Solutions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  