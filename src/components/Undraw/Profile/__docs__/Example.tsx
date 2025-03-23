import React, { FC } from "react";
import Profile from "../Profile";

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
      <Profile width="500px" height="500px" />
    </div>
  );
};

export default Example;
