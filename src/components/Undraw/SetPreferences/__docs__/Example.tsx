import React, { FC } from "react";
import SetPreferences from "../SetPreferences";

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
      <SetPreferences width="500px" height="500px" />
    </div>
  );
};

export default Example;
