import React, { FC } from "react";
  import TreeSwing from "../TreeSwing";
  
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
        <TreeSwing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  