import React, { FC } from "react";
import YoungManAvatar from "../YoungManAvatar";

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
      <YoungManAvatar width="500px" height="500px" />
    </div>
  );
};

export default Example;
