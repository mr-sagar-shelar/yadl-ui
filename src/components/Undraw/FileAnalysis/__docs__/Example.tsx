import React, { FC } from "react";
  import FileAnalysis from "../FileAnalysis";
  
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
        <FileAnalysis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  