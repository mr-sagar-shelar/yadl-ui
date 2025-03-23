import React, { FC } from "react";
import Loading from "../Loading";

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
      <Loading width="500px" height="500px" />
    </div>
  );
};

export default Example;
