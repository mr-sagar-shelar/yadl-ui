import React, { FC } from "react";
import SuperWomanSuperWoman from "../SuperWomanSuperWoman";

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
      <SuperWomanSuperWoman width="500px" height="500px" />
    </div>
  );
};

export default Example;
