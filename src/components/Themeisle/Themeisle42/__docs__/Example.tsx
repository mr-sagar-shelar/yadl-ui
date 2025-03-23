import React, { FC } from "react";
import Themeisle42 from "../Themeisle42";

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
      <Themeisle42 width="500px" height="500px" />
    </div>
  );
};

export default Example;
