import React, { FC } from "react";
import SocialMedia from "../SocialMedia";

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
      <SocialMedia width="500px" height="500px" />
    </div>
  );
};

export default Example;
