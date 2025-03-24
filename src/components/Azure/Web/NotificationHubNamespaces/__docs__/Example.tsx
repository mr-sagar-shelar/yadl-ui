import React, { FC } from "react";
  import NotificationHubNamespaces from "../NotificationHubNamespaces";
  
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
        <NotificationHubNamespaces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  