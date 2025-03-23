import React, { FC } from "react";
import MonitorMonitor from "../MonitorMonitor";

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
      <MonitorMonitor width="500px" height="500px" />
    </div>
  );
};

export default Example;
