import React, { FC } from "react";
import Mention from "../Mention";

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
      <Mention width="500px" height="500px" />
    </div>
  );
};

export default Example;
