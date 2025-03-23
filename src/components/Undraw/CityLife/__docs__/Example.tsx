import React, { FC } from "react";
import CityLife from "../CityLife";

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
      <CityLife width="500px" height="500px" />
    </div>
  );
};

export default Example;
