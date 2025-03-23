import React, { FC } from "react";
import Snowman from "../Snowman";

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
      <Snowman width="500px" height="500px" />
    </div>
  );
};

export default Example;
