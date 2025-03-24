import React, { FC } from "react";
  import DesignThinking from "../DesignThinking";
  
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
        <DesignThinking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  