import React, { FC } from "react";
import Map from "../Map";

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
      <Map width="500px" height="500px" />
    </div>
  );
};

export default Example;
