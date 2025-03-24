import React, { FC } from "react";
  import UsabilityTesting from "../UsabilityTesting";
  
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
        <UsabilityTesting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  