import React, { FC } from "react";
  import ResourceManagementPrivateLink from "../ResourceManagementPrivateLink";
  
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
        <ResourceManagementPrivateLink width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  