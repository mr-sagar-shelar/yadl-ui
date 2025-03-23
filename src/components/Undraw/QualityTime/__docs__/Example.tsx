import React, { FC } from "react";
import QualityTime from "../QualityTime";

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
      <QualityTime width="500px" height="500px" />
    </div>
  );
};

export default Example;
