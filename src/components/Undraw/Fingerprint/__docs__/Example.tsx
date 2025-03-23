import React, { FC } from "react";
import Fingerprint from "../Fingerprint";

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
      <Fingerprint width="500px" height="500px" />
    </div>
  );
};

export default Example;
