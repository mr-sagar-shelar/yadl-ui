import React, { FC } from "react";
  import IdentityGovernance from "../IdentityGovernance";
  
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
        <IdentityGovernance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  