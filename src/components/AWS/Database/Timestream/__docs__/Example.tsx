import React, { FC } from "react";
  import Timestream from "../Timestream";
  
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
        <Timestream width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  