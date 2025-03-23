import React, { FC } from "react";
import SocialGrowth from "../SocialGrowth";

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
      <SocialGrowth width="500px" height="500px" />
    </div>
  );
};

export default Example;
