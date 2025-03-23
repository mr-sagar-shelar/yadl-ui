import React, { FC } from "react";
import MobileEncryption from "../MobileEncryption";

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
      <MobileEncryption width="500px" height="500px" />
    </div>
  );
};

export default Example;
