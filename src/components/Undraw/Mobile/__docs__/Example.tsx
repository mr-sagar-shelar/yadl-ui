import React, { FC } from "react";
import Mobile from "../Mobile";

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
      <Mobile width="500px" height="500px" />
    </div>
  );
};

export default Example;
