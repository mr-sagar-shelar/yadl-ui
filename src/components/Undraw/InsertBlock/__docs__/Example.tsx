import React, { FC } from "react";
import InsertBlock from "../InsertBlock";

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
      <InsertBlock width="500px" height="500px" />
    </div>
  );
};

export default Example;
