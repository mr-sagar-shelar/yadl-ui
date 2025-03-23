import React, { FC } from "react";
import MobileApplication from "../MobileApplication";

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
      <MobileApplication width="500px" height="500px" />
    </div>
  );
};

export default Example;
