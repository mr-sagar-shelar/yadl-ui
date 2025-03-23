import React, { FC } from "react";
import Miro from "../Miro";

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
      <Miro width="500px" height="500px" />
    </div>
  );
};

export default Example;
