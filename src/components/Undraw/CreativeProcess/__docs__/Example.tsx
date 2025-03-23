import React, { FC } from "react";
import CreativeProcess from "../CreativeProcess";

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
      <CreativeProcess width="500px" height="500px" />
    </div>
  );
};

export default Example;
