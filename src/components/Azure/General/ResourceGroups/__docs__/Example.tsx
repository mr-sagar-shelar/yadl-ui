import React, { FC } from "react";
  import ResourceGroups from "../ResourceGroups";
  
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
        <ResourceGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  