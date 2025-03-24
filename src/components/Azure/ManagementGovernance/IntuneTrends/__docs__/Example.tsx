import React, { FC } from "react";
  import IntuneTrends from "../IntuneTrends";
  
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
        <IntuneTrends width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  