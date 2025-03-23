import React, { FC } from "react";
import Certificate from "../Certificate";

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
      <Certificate width="500px" height="500px" />
    </div>
  );
};

export default Example;
