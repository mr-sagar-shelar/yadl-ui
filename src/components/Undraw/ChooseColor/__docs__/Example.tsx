import React, { FC } from "react";
import ChooseColor from "../ChooseColor";

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
      <ChooseColor width="500px" height="500px" />
    </div>
  );
};

export default Example;
