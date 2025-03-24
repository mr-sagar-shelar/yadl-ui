import React, { FC } from "react";
  import VideoCall from "../VideoCall";
  
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
        <VideoCall width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  