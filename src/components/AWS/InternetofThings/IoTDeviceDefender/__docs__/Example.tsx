import React, { FC } from "react";
  import IoTDeviceDefender from "../IoTDeviceDefender";
  
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
        <IoTDeviceDefender width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  