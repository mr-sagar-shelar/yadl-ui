import React, { FC } from "react";
import HeatmapHeatmap from "../HeatmapHeatmap";

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
      <HeatmapHeatmap width="500px" height="500px" />
    </div>
  );
};

export default Example;
