import React, { FC } from "react";
import Destination from "../Destination";

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
      <Destination width="500px" height="500px" />
    </div>
  );
};

export default Example;
