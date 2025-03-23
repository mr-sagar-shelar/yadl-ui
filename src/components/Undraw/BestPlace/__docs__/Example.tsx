import React, { FC } from "react";
import BestPlace from "../BestPlace";

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
      <BestPlace width="500px" height="500px" />
    </div>
  );
};

export default Example;
