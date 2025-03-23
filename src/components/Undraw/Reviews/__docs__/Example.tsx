import React, { FC } from "react";
import Reviews from "../Reviews";

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
      <Reviews width="500px" height="500px" />
    </div>
  );
};

export default Example;
