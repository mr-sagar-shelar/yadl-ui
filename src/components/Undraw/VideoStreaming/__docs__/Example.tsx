import React, { FC } from "react";
  import VideoStreaming from "../VideoStreaming";
  
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
        <VideoStreaming width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  