import React, { FC } from "react";
import Placeholders from "../Placeholders";

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
      <Placeholders width="500px" height="500px" />
    </div>
  );
};

export default Example;
