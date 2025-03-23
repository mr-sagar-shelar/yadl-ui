import React, { FC } from "react";
import Review from "../Review";

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
      <Review width="500px" height="500px" />
    </div>
  );
};

export default Example;
