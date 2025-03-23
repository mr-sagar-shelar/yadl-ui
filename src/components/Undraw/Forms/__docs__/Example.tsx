import React, { FC } from "react";
import Forms from "../Forms";

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
      <Forms width="500px" height="500px" />
    </div>
  );
};

export default Example;
