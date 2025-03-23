import React, { FC } from "react";
import Traveling from "../Traveling";

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
      <Traveling width="500px" height="500px" />
    </div>
  );
};

export default Example;
