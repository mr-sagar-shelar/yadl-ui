import React, { FC } from "react";
import MessagingFun from "../MessagingFun";

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
      <MessagingFun width="500px" height="500px" />
    </div>
  );
};

export default Example;
