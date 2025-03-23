import React, { FC } from "react";
import DataTrends from "../DataTrends";

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
      <DataTrends width="500px" height="500px" />
    </div>
  );
};

export default Example;
