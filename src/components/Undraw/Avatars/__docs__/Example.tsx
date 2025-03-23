import React, { FC } from "react";
import Avatars from "../Avatars";

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
      <Avatars />
    </div>
  );
};

export default Example;