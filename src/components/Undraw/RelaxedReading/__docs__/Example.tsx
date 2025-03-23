import React, { FC } from "react";
import RelaxedReading from "../RelaxedReading";

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
      <RelaxedReading width="500px" height="500px" />
    </div>
  );
};

export default Example;
