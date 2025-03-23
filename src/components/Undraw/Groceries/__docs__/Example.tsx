import React, { FC } from "react";
import Groceries from "../Groceries";

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
      <Groceries width="500px" height="500px" />
    </div>
  );
};

export default Example;
