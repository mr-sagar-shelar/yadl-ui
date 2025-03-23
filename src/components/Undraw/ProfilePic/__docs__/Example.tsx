import React, { FC } from "react";
import ProfilePic from "../ProfilePic";

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
      <ProfilePic width="500px" height="500px" />
    </div>
  );
};

export default Example;
