import React, { FC } from "react";
import SculptingSculpting from "../SculptingSculpting";

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
      <SculptingSculpting width="500px" height="500px" />
    </div>
  );
};

export default Example;
