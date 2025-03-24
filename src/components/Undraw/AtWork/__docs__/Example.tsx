import React, { FC } from "react";
  import AtWork from "../AtWork";
  
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
        <AtWork width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  