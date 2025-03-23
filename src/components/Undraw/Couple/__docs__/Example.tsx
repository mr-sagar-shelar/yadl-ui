import React, { FC } from "react";
import Couple from "../Couple";

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
      <Couple width="500px" height="500px" />
    </div>
  );
};

export default Example;
