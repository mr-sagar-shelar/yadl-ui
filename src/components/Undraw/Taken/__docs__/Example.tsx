import React, { FC } from "react";
import Taken from "../Taken";

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
      <Taken width="500px" height="500px" />
    </div>
  );
};

export default Example;
