import React, { FC } from "react";
import Newspaper from "../Newspaper";

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
      <Newspaper width="500px" height="500px" />
    </div>
  );
};

export default Example;
