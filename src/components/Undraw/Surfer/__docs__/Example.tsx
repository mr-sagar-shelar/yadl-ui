import React, { FC } from "react";
  import Surfer from "../Surfer";
  
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
        <Surfer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  