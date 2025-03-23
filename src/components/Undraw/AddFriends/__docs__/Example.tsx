import React, { FC } from "react";
import AddFriends from "../AddFriends";

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
      <AddFriends width="500px" height="500px" />
    </div>
  );
};

export default Example;
