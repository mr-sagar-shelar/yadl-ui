import React, { FC } from "react";
  import InternetAnalyzerProfiles from "../InternetAnalyzerProfiles";
  
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
        <InternetAnalyzerProfiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  