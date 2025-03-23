import React, { FC } from "react";
import AccessAccount from "../AccessAccount";

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
      <AccessAccount width="500px" height="500px" />
    </div>
  );
};

export default Example;
