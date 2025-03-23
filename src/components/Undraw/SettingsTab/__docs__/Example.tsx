import React, { FC } from "react";
import SettingsTab from "../SettingsTab";

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
      <SettingsTab width="500px" height="500px" />
    </div>
  );
};

export default Example;
