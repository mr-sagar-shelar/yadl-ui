import React, { FC } from "react";
  import IdentityAndAccessManagement from "../IdentityAndAccessManagement";
  
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
        <IdentityAndAccessManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  