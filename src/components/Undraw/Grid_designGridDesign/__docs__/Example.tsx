import React, { FC } from "react";
import Grid_designGridDesign from "../Grid_designGridDesign";

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
      <Grid_designGridDesign width="500px" height="500px" />
    </div>
  );
};

export default Example;
