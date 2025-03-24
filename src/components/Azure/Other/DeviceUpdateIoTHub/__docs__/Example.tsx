import React, { FC } from "react";
  import DeviceUpdateIoTHub from "../DeviceUpdateIoTHub";
  
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
        <DeviceUpdateIoTHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  