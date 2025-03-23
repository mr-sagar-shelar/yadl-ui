import React, { FC } from "react";
import ToTheMoon from "../ToTheMoon";

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
      <ToTheMoon width="500px" height="500px" />
    </div>
  );
};

export default Example;
