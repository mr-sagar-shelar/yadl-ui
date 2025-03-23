import React, { FC } from "react";
import OutdoorAdventure from "../OutdoorAdventure";

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
      <OutdoorAdventure width="500px" height="500px" />
    </div>
  );
};

export default Example;
