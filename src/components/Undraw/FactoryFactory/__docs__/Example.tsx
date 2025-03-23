import React, { FC } from "react";
import FactoryFactory from "../FactoryFactory";

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
      <FactoryFactory width="500px" height="500px" />
    </div>
  );
};

export default Example;
