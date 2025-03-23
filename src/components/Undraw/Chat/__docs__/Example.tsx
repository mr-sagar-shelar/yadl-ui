import React, { FC } from "react";
import Chat from "../Chat";

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
      <Chat width="500px" height="500px" />
    </div>
  );
};

export default Example;
