import React, { FC } from "react";
import RelaxMode from "../RelaxMode";

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
      <RelaxMode width="500px" height="500px" />
    </div>
  );
};

export default Example;
