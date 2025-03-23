import React, { FC } from "react";
import CountrySide from "../CountrySide";

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
      <CountrySide width="500px" height="500px" />
    </div>
  );
};

export default Example;
