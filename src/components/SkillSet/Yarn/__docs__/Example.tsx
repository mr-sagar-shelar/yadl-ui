import React, { FC } from "react";
  import Yarn from "../Yarn";
  
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
        <Yarn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  