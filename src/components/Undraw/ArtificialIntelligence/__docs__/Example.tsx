import React, { FC } from "react";
  import ArtificialIntelligence from "../ArtificialIntelligence";
  
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
        <ArtificialIntelligence width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  