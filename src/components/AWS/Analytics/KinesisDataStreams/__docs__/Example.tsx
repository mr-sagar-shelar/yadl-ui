import React, { FC } from "react";
  import KinesisDataStreams from "../KinesisDataStreams";
  
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
        <KinesisDataStreams width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  