import React, { FC } from "react";
import HappyNews from "../HappyNews";

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
      <HappyNews width="500px" height="500px" />
    </div>
  );
};

export default Example;
