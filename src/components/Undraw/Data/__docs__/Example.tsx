import React, { FC } from "react";
  import Data from "../Data";
  
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
        <Data width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  