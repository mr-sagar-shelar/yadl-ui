import React, { FC } from "react";
import Confirmation from "../Confirmation";

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
      <Confirmation width="500px" height="500px" />
    </div>
  );
};

export default Example;
