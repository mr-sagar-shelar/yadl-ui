import React, { FC } from "react";
import NuxtJs from "../NuxtJs";

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
      <NuxtJs width="500px" height="500px" />
    </div>
  );
};

export default Example;
