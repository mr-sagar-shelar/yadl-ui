import React, { FC } from "react";
import Invite from "../Invite";

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
      <Invite width="500px" height="500px" />
    </div>
  );
};

export default Example;
