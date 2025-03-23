import React, { FC } from "react";
import HeartbrokenHeartbroken from "../HeartbrokenHeartbroken";

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
      <HeartbrokenHeartbroken width="500px" height="500px" />
    </div>
  );
};

export default Example;
