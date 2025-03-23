import React, { FC } from "react";
import DarkAlleyDarkAlley from "../DarkAlleyDarkAlley";

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
      <DarkAlleyDarkAlley width="500px" height="500px" />
    </div>
  );
};

export default Example;
