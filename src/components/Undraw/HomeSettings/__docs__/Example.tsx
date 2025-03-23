import React, { FC } from "react";
import HomeSettings from "../HomeSettings";

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
      <HomeSettings width="500px" height="500px" />
    </div>
  );
};

export default Example;
