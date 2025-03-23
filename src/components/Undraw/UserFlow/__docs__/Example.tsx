import React, { FC } from "react";
import UserFlow from "../UserFlow";

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
      <UserFlow width="500px" height="500px" />
    </div>
  );
};

export default Example;
