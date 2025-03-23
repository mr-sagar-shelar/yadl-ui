import React, { FC } from "react";
import Unlock from "../Unlock";

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
      <Unlock width="500px" height="500px" />
    </div>
  );
};

export default Example;
