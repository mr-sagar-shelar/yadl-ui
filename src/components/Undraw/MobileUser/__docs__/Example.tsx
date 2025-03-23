import React, { FC } from "react";
import MobileUser from "../MobileUser";

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
      <MobileUser width="500px" height="500px" />
    </div>
  );
};

export default Example;
