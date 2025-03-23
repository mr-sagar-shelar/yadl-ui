import React, { FC } from "react";
import SocialStrategy from "../SocialStrategy";

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
      <SocialStrategy width="500px" height="500px" />
    </div>
  );
};

export default Example;
