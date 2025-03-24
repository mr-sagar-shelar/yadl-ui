import React, { FC } from "react";
  import Businesswoman from "../Businesswoman";
  
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
        <Businesswoman width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  