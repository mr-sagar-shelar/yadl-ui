import React, { FC } from "react";
import CMS from "../CMS";

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
      <CMS width="500px" height="500px" />
    </div>
  );
};

export default Example;
