import React, { FC } from "react";
import RoadToKnowledge from "../RoadToKnowledge";

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
      <RoadToKnowledge width="500px" height="500px" />
    </div>
  );
};

export default Example;
