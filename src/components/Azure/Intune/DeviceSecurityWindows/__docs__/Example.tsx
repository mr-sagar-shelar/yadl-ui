import React, { FC } from "react";
  import DeviceSecurityWindows from "../DeviceSecurityWindows";
  
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
        <DeviceSecurityWindows width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  