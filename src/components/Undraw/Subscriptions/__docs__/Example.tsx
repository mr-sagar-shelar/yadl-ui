import React, { FC } from "react";
import Subscriptions from "../Subscriptions";

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
      <Subscriptions width="500px" height="500px" />
    </div>
  );
};

export default Example;
