import React, { FC } from "react";
  import ManagementGroups from "../ManagementGroups";
  
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
        <ManagementGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  