import React, { FC } from "react";
import StatisticChart from "../StatisticChart";

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
      <StatisticChart width="500px" height="500px" />
    </div>
  );
};

export default Example;
