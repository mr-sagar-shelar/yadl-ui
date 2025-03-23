import React, { FC } from "react";
import MessageSent from "../MessageSent";

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
      <MessageSent width="500px" height="500px" />
    </div>
  );
};

export default Example;
