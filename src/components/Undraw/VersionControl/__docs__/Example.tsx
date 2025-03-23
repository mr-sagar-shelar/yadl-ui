import React, { FC } from "react";
import VersionControl from "../VersionControl";

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
      <VersionControl width="500px" height="500px" />
    </div>
  );
};

export default Example;
