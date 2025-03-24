import React, { FC } from "react";
  import DeviceEnrollment from "../DeviceEnrollment";
  
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
        <DeviceEnrollment width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  