import React, { FC } from "react";
import SocialIdeas from "../SocialIdeas";

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
      <SocialIdeas width="500px" height="500px" />
    </div>
  );
};

export default Example;
