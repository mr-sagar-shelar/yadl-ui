import React, { FC } from "react";
  import DeepComposer from "../DeepComposer";
  
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
        <DeepComposer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  