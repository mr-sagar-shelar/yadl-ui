import React, { FC } from "react";
  import InteractiveVideoService from "../InteractiveVideoService";
  
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
        <InteractiveVideoService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  