import React, { FC } from "react";
  import ApplicationSecurityGroups from "../ApplicationSecurityGroups";
  
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
        <ApplicationSecurityGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  