import React, { FC } from "react";
import Autumn from "../Autumn";

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
      <Autumn width="500px" height="500px" />
    </div>
  );
};

export default Example;
