import React, { FC } from "react";
  import VideoIntelligenceApi from "../VideoIntelligenceApi";
  
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
        <VideoIntelligenceApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  