import React, { FC } from "react";
import Basketball from "../Basketball";

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
      <Basketball width="500px" height="500px" />
    </div>
  );
};

export default Example;
