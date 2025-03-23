import React, { FC } from "react";
import RoadSign from "../RoadSign";

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
      <RoadSign width="500px" height="500px" />
    </div>
  );
};

export default Example;
