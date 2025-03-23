import React, { FC } from "react";
import DomainNames from "../DomainNames";

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
      <DomainNames width="500px" height="500px" />
    </div>
  );
};

export default Example;
