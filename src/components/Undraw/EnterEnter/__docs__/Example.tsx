import React, { FC } from "react";
import EnterEnter from "../EnterEnter";

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
      <EnterEnter width="500px" height="500px" />
    </div>
  );
};

export default Example;
