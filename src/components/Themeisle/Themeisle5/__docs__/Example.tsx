import React, { FC } from "react";
import Themeisle5 from "../Themeisle5";

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
      <Themeisle5 width="500px" height="500px" />
    </div>
  );
};

export default Example;
