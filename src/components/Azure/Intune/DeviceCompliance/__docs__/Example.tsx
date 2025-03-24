import React, { FC } from "react";
  import DeviceCompliance from "../DeviceCompliance";
  
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
        <DeviceCompliance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  