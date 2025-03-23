import React, { FC } from "react";
import HangOut from "../HangOut";

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
      <HangOut width="500px" height="500px" />
    </div>
  );
};

export default Example;
