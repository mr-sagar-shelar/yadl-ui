import React, { FC } from "react";
import Themeisle3 from "../Themeisle3";

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
      <Themeisle3 width="500px" height="500px" />
    </div>
  );
};

export default Example;
