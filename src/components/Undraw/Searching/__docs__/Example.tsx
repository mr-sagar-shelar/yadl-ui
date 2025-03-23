import React, { FC } from "react";
import Searching from "../Searching";

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
      <Searching width="500px" height="500px" />
    </div>
  );
};

export default Example;
