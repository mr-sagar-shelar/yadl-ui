import React, { FC } from "react";
import Themeisle400 from "../Themeisle400";

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
      <Themeisle400 width="500px" height="500px" />
    </div>
  );
};

export default Example;
