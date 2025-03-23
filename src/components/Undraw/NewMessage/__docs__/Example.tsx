import React, { FC } from "react";
import NewMessage from "../NewMessage";

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
      <NewMessage width="500px" height="500px" />
    </div>
  );
};

export default Example;
