import React, { FC } from "react";
import AddDocument from "../AddDocument";

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
      <AddDocument width="500px" height="500px" />
    </div>
  );
};

export default Example;
