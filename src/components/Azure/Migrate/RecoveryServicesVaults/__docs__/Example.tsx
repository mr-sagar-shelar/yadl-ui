import React, { FC } from "react";
  import RecoveryServicesVaults from "../RecoveryServicesVaults";
  
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
        <RecoveryServicesVaults width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  