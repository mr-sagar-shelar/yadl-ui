import React, { FC } from "react";
  import LogAnalyticsWorkspaces from "../LogAnalyticsWorkspaces";
  
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
        <LogAnalyticsWorkspaces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  