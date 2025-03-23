import React, { FC } from "react";
import Update from "../Update";

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
      <Update width="500px" height="500px" />
    </div>
  );
};

export default Example;
