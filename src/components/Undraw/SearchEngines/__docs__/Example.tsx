import React, { FC } from "react";
import SearchEngines from "../SearchEngines";

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
      <SearchEngines width="500px" height="500px" />
    </div>
  );
};

export default Example;
