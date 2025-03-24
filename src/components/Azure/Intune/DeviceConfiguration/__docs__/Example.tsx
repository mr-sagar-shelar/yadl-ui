import React, { FC } from "react";
  import DeviceConfiguration from "../DeviceConfiguration";
  
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
        <DeviceConfiguration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  