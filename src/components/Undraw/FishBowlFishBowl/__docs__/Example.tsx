import React, { FC } from "react";
import FishBowlFishBowl from "../FishBowlFishBowl";

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
      <FishBowlFishBowl width="500px" height="500px" />
    </div>
  );
};

export default Example;
