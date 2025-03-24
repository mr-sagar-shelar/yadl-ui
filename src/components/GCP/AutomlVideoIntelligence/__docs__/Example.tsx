import React, { FC } from "react";
  import AutomlVideoIntelligence from "../AutomlVideoIntelligence";
  
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
        <AutomlVideoIntelligence width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  