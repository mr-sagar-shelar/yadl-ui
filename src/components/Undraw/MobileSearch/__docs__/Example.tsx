import React, { FC } from "react";
import MobileSearch from "../MobileSearch";

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
      <MobileSearch width="500px" height="500px" />
    </div>
  );
};

export default Example;
