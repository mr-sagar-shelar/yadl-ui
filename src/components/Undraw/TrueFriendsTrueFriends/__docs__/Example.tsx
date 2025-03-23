import React, { FC } from "react";
import TrueFriendsTrueFriends from "../TrueFriendsTrueFriends";

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
      <TrueFriendsTrueFriends width="500px" height="500px" />
    </div>
  );
};

export default Example;
