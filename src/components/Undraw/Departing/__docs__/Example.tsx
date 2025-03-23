import React, { FC } from "react";
import Departing from "../Departing";

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
      <Departing width="500px" height="500px" />
    </div>
  );
};

export default Example;
