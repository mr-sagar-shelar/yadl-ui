import React, { FC } from "react";
import DevelopApp from "../DevelopApp";

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
      <DevelopApp width="500px" height="500px" />
    </div>
  );
};

export default Example;
