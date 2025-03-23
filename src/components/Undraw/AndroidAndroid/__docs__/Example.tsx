import React, { FC } from "react";
import AndroidAndroid from "../AndroidAndroid";

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
      <AndroidAndroid width="500px" height="500px" />
    </div>
  );
};

export default Example;
