import React, { FC } from "react";
import NightCallsNightCalls from "../NightCallsNightCalls";

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
      <NightCallsNightCalls width="500px" height="500px" />
    </div>
  );
};

export default Example;
