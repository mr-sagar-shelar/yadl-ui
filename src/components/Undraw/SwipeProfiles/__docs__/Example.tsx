import React, { FC } from "react";
import SwipeProfiles from "../SwipeProfiles";

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
      <SwipeProfiles width="500px" height="500px" />
    </div>
  );
};

export default Example;
