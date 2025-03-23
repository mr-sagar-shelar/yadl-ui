import React, { FC } from "react";
import WebDevices from "../WebDevices";

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
      <WebDevices width="500px" height="500px" />
    </div>
  );
};

export default Example;
