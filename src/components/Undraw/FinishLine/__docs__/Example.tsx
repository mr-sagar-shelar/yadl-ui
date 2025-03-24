import React, { FC } from "react";
  import FinishLine from "../FinishLine";
  
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
        <FinishLine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  