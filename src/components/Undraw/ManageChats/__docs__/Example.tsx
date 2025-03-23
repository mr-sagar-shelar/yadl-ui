import React, { FC } from "react";
import ManageChats from "../ManageChats";

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
      <ManageChats width="500px" height="500px" />
    </div>
  );
};

export default Example;
