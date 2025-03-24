import React, { FC } from "react";
  import OutboundConnection from "../OutboundConnection";
  
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
        <OutboundConnection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  