import React, { FC } from "react";
import Mobile_devicesMobileDevices from "../Mobile_devicesMobileDevices";

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
      <Mobile_devicesMobileDevices width="500px" height="500px" />
    </div>
  );
};

export default Example;
