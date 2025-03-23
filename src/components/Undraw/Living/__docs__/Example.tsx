import React, { FC } from "react";
import Living from "../Living";

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
      <Living width="500px" height="500px" />
    </div>
  );
};

export default Example;
