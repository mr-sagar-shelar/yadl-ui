import React, { FC } from "react";
  import BareMetalSolutions from "../BareMetalSolutions";
  
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
        <BareMetalSolutions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  