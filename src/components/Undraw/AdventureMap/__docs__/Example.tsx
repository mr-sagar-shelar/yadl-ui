import React, { FC } from "react";
import AdventureMap from "../AdventureMap";

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
      <AdventureMap width="500px" height="500px" />
    </div>
  );
};

export default Example;
