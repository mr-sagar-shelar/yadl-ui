import React, { FC } from "react";
import CabinCabin from "../CabinCabin";

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
      <CabinCabin width="500px" height="500px" />
    </div>
  );
};

export default Example;
