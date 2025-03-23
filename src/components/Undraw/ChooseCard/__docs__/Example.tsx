import React, { FC } from "react";
import ChooseCard from "../ChooseCard";

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
      <ChooseCard width="500px" height="500px" />
    </div>
  );
};

export default Example;
