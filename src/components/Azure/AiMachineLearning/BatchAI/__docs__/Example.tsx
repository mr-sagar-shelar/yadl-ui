import React, { FC } from "react";
  import BatchAI from "../BatchAI";
  
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
        <BatchAI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  