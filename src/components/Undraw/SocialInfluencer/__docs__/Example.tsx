import React, { FC } from "react";
import SocialInfluencer from "../SocialInfluencer";

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
      <SocialInfluencer width="500px" height="500px" />
    </div>
  );
};

export default Example;
