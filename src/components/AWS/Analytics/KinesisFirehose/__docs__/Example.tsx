import React, { FC } from "react";
  import KinesisFirehose from "../KinesisFirehose";
  
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
        <KinesisFirehose width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  