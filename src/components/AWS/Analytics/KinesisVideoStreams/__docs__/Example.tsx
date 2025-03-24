import React, { FC } from "react";
  import KinesisVideoStreams from "../KinesisVideoStreams";
  
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
        <KinesisVideoStreams width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  