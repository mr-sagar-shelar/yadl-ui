import React, { FC } from "react";
import Discoverable from "../Discoverable";

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
      <Discoverable width="500px" height="500px" />
    </div>
  );
};

export default Example;
