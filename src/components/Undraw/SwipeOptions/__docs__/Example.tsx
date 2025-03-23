import React, { FC } from "react";
import SwipeOptions from "../SwipeOptions";

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
      <SwipeOptions width="500px" height="500px" />
    </div>
  );
};

export default Example;
