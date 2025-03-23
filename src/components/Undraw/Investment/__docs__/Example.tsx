import React, { FC } from "react";
import Investment from "../Investment";

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
      <Investment width="500px" height="500px" />
    </div>
  );
};

export default Example;
