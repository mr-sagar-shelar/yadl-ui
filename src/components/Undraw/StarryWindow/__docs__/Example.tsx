import React, { FC } from "react";
import StarryWindow from "../StarryWindow";

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
      <StarryWindow width="500px" height="500px" />
    </div>
  );
};

export default Example;
