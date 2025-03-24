import React, { FC } from "react";
  import DeconstructedDeconstructed from "../DeconstructedDeconstructed";
  
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
        <DeconstructedDeconstructed width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  