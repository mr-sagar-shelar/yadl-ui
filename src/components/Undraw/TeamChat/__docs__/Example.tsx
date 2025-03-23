import React, { FC } from "react";
import TeamChat from "../TeamChat";

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
      <TeamChat width="500px" height="500px" />
    </div>
  );
};

export default Example;
