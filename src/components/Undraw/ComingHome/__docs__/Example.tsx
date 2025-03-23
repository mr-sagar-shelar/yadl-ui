import React, { FC } from "react";
import ComingHome from "../ComingHome";

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
      <ComingHome width="500px" height="500px" />
    </div>
  );
};

export default Example;
