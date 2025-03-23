import React, { FC } from "react";
import Buddies from "../Buddies";

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
      <Buddies width="500px" height="500px" />
    </div>
  );
};

export default Example;
