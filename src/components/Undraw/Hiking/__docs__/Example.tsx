import React, { FC } from "react";
import Hiking from "../Hiking";

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
      <Hiking width="500px" height="500px" />
    </div>
  );
};

export default Example;
