import React, { FC } from "react";
import SocialExpert from "../SocialExpert";

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
      <SocialExpert width="500px" height="500px" />
    </div>
  );
};

export default Example;
