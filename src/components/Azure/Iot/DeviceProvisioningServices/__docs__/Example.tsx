import React, { FC } from "react";
  import DeviceProvisioningServices from "../DeviceProvisioningServices";
  
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
        <DeviceProvisioningServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  