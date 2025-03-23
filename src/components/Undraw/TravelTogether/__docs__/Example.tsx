import React, { FC } from "react";
import TravelTogether from "../TravelTogether";

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
      <TravelTogether width="500px" height="500px" />
    </div>
  );
};

export default Example;
