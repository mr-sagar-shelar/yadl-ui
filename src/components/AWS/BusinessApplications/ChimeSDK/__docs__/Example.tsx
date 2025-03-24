import React, { FC } from "react";
  import ChimeSDK from "../ChimeSDK";
  
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
        <ChimeSDK width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  