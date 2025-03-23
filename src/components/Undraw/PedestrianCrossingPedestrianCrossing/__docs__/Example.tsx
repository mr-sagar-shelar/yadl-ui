import React, { FC } from "react";
import PedestrianCrossingPedestrianCrossing from "../PedestrianCrossingPedestrianCrossing";

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
      <PedestrianCrossingPedestrianCrossing width="500px" height="500px" />
    </div>
  );
};

export default Example;
