import React, { FC } from "react";
import Themeisle100 from "../Themeisle100";

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
      <Themeisle100 width="500px" height="500px" />
    </div>
  );
};

export default Example;
