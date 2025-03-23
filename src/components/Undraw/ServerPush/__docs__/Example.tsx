import React, { FC } from "react";
import ServerPush from "../ServerPush";

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
      <ServerPush width="500px" height="500px" />
    </div>
  );
};

export default Example;
