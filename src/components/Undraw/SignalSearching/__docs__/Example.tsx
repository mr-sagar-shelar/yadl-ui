import React, { FC } from "react";
import SignalSearching from "../SignalSearching";

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
      <SignalSearching width="500px" height="500px" />
    </div>
  );
};

export default Example;
