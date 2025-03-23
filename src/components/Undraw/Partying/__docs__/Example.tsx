import React, { FC } from "react";
import Partying from "../Partying";

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
      <Partying width="500px" height="500px" />
    </div>
  );
};

export default Example;
