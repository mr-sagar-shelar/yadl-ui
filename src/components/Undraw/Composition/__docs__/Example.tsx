import React, { FC } from "react";
  import Composition from "../Composition";
  
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
        <Composition width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  