import React, { FC } from "react";
import GroupChat from "../GroupChat";

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
      <GroupChat width="500px" height="500px" />
    </div>
  );
};

export default Example;
