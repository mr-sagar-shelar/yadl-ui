import React, { FC } from "react";
  import Collecting from "../Collecting";
  
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
        <Collecting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  