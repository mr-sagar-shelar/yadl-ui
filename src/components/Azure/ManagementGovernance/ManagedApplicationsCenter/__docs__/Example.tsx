import React, { FC } from "react";
  import ManagedApplicationsCenter from "../ManagedApplicationsCenter";
  
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
        <ManagedApplicationsCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  