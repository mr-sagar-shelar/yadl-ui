import React, { FC } from "react";
import Approve from "../Approve";

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
      <Approve width="500px" height="500px" />
    </div>
  );
};

export default Example;
