import React, { FC } from "react";
  import VerifiableCredentials from "../VerifiableCredentials";
  
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
        <VerifiableCredentials width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  