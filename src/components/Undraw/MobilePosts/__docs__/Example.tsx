import React, { FC } from "react";
import MobilePosts from "../MobilePosts";

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
      <MobilePosts width="500px" height="500px" />
    </div>
  );
};

export default Example;
