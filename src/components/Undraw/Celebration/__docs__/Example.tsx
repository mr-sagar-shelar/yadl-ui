import React, { FC } from "react";
import Celebration from "../Celebration";

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
      <Celebration width="500px" height="500px" />
    </div>
  );
};

export default Example;
