import React, { FC } from "react";
  import PolicyAnalyzer from "../PolicyAnalyzer";
  
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
        <PolicyAnalyzer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  