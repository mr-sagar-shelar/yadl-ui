import React, { FC } from "react";
import HappyFeeling from "../HappyFeeling";

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
      <HappyFeeling width="500px" height="500px" />
    </div>
  );
};

export default Example;
