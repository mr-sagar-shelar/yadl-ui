import React, { FC } from "react";
import ICanFlyICanFly from "../ICanFlyICanFly";

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
      <ICanFlyICanFly width="500px" height="500px" />
    </div>
  );
};

export default Example;
