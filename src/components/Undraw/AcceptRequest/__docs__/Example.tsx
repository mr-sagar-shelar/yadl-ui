import React, { FC } from "react";
import AcceptRequest from "../AcceptRequest";

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
      <AcceptRequest width="500px" height="500px" />
    </div>
  );
};

export default Example;
