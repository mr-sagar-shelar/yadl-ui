import React, { FC } from "react";
import Vintage from "../Vintage";

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
      <Vintage width="500px" height="500px" />
    </div>
  );
};

export default Example;
