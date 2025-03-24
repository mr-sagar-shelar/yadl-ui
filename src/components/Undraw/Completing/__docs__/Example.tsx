import React, { FC } from "react";
  import Completing from "../Completing";
  
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
        <Completing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  