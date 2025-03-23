import React, { FC } from "react";
import Themeisle365 from "../Themeisle365";

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
      <Themeisle365 width="500px" height="500px" />
    </div>
  );
};

export default Example;
