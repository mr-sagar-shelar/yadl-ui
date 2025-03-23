import React, { FC } from "react";
import FingerprintLogin from "../FingerprintLogin";

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
      <FingerprintLogin width="500px" height="500px" />
    </div>
  );
};

export default Example;
