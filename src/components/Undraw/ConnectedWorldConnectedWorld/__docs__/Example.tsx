import React, { FC } from "react";
import ConnectedWorldConnectedWorld from "../ConnectedWorldConnectedWorld";

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
      <ConnectedWorldConnectedWorld width="500px" height="500px" />
    </div>
  );
};

export default Example;
