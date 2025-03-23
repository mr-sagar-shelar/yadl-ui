import React, { FC } from "react";
import Preferences from "../Preferences";

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
      <Preferences width="500px" height="500px" />
    </div>
  );
};

export default Example;
