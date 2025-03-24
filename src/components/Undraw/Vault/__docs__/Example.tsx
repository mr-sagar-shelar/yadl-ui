import React, { FC } from "react";
  import Vault from "../Vault";
  
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
        <Vault width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  