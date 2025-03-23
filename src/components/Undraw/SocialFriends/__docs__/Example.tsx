import React, { FC } from "react";
import SocialFriends from "../SocialFriends";

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
      <SocialFriends width="500px" height="500px" />
    </div>
  );
};

export default Example;
