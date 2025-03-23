import React, { FC } from "react";
import AwardsAwards from "../AwardsAwards";

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
      <AwardsAwards width="500px" height="500px" />
    </div>
  );
};

export default Example;
