import React, { FC } from "react";
import FriendsFriends from "../FriendsFriends";

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
      <FriendsFriends width="500px" height="500px" />
    </div>
  );
};

export default Example;
