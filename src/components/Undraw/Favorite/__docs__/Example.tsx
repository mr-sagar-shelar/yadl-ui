import React, { FC } from "react";
import Favorite from "../Favorite";

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
      <Favorite width="500px" height="500px" />
    </div>
  );
};

export default Example;
