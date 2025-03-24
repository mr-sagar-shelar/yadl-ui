import React, { FC } from "react";
  import DeviceSecurityApple from "../DeviceSecurityApple";
  
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
        <DeviceSecurityApple width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  