import React, { FC } from "react";
  import ServiceManagementConnector from "../ServiceManagementConnector";
  
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
        <ServiceManagementConnector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  