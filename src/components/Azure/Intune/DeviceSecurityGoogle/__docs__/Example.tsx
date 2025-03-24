import React, { FC } from "react";
  import DeviceSecurityGoogle from "../DeviceSecurityGoogle";
  
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
        <DeviceSecurityGoogle width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  