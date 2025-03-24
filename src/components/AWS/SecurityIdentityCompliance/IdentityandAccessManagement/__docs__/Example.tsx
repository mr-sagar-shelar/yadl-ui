import React, { FC } from "react";
  import IdentityandAccessManagement from "../IdentityandAccessManagement";
  
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
        <IdentityandAccessManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  