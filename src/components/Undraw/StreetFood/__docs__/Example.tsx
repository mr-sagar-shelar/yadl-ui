import React, { FC } from "react";
import StreetFood from "../StreetFood";

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
      <StreetFood width="500px" height="500px" />
    </div>
  );
};

export default Example;
