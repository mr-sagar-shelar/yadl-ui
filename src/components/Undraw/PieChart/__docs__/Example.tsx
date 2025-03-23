import React, { FC } from "react";
import PieChart from "../PieChart";

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
      <PieChart width="500px" height="500px" />
    </div>
  );
};

export default Example;
