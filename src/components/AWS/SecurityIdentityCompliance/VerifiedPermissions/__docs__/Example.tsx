import React, { FC } from "react";
  import VerifiedPermissions from "../VerifiedPermissions";
  
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
        <VerifiedPermissions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  