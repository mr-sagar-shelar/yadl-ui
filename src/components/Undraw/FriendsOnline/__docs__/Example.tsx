import React, { FC } from "react";
import FriendsOnline from "../FriendsOnline";

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
      <FriendsOnline width="500px" height="500px" />
    </div>
  );
};

export default Example;
