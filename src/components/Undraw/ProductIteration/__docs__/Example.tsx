import React, { FC } from "react";
import ProductIteration from "../ProductIteration";

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
      <ProductIteration width="500px" height="500px" />
    </div>
  );
};

export default Example;
