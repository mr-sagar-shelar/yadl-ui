import React, { FC } from "react";
import Themeisle1 from "../Themeisle1";

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
      <Themeisle1 width="500px" height="500px" />
    </div>
  );
};

export default Example;
