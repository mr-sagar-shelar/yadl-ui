import React, { FC } from "react";
  import GlobeError from "../GlobeError";
  
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
        <GlobeError width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  