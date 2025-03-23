import React, { FC } from "react";
import Emails from "../Emails";

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
      <Emails width="500px" height="500px" />
    </div>
  );
};

export default Example;
