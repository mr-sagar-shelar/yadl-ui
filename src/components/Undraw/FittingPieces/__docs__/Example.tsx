import React, { FC } from "react";
  import FittingPieces from "../FittingPieces";
  
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
        <FittingPieces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  