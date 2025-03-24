import React, { FC } from "react";
  import RealworldInsights from "../RealworldInsights";
  
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
        <RealworldInsights width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  