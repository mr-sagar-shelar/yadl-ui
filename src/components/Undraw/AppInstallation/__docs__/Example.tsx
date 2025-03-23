import React, { FC } from "react";
import AppInstallation from "../AppInstallation";

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
      <AppInstallation width="500px" height="500px" />
    </div>
  );
};

export default Example;
