import React, { FC } from "react";
  import CognitiveSearch from "../CognitiveSearch";
  
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
        <CognitiveSearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  