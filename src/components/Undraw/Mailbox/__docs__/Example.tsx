import React, { FC } from "react";
import Mailbox from "../Mailbox";

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
      <Mailbox width="500px" height="500px" />
    </div>
  );
};

export default Example;
