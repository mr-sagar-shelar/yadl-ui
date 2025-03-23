import React, { FC } from "react";
import Blogging from "../Blogging";

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
      <Blogging width="500px" height="500px" />
    </div>
  );
};

export default Example;
