import React, { FC } from "react";
import BentoGrid from "../BentoGrid";

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
      <BentoGrid />
    </div>
  );
};

export default Example;