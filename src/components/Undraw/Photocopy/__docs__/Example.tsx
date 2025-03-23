import React, { FC } from "react";
import Photocopy from "../Photocopy";

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
      <Photocopy width="500px" height="500px" />
    </div>
  );
};

export default Example;
