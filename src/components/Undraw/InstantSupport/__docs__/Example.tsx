import React, { FC } from "react";
import InstantSupport from "../InstantSupport";

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
      <InstantSupport width="500px" height="500px" />
    </div>
  );
};

export default Example;
