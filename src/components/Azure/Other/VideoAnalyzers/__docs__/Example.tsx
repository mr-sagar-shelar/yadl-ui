import React, { FC } from "react";
  import VideoAnalyzers from "../VideoAnalyzers";
  
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
        <VideoAnalyzers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  