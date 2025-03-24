import React, { FC } from "react";
  import CloudNat from "../CloudNat";
  
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
        <CloudNat width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  