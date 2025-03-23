import React, { FC } from "react";
import News from "../News";

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
      <News width="500px" height="500px" />
    </div>
  );
};

export default Example;
