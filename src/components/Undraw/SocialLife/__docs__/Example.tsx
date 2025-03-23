import React, { FC } from "react";
import SocialLife from "../SocialLife";

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
      <SocialLife width="500px" height="500px" />
    </div>
  );
};

export default Example;
