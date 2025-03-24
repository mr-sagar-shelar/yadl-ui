import React, { FC } from "react";
  import APIManagementServices from "../APIManagementServices";
  
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
        <APIManagementServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  