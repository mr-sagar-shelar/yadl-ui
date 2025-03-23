import React, { FC } from "react";
import ProfileImage from "../ProfileImage";

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
      <ProfileImage width="500px" height="500px" />
    </div>
  );
};

export default Example;
