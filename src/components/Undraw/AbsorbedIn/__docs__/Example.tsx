import React, { FC } from "react";
import AbsorbedIn from "../AbsorbedIn";

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
      <AbsorbedIn width="500px" height="500px" />
    </div>
  );
};

export default Example;
