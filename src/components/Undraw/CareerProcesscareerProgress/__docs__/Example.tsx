import React, { FC } from "react";
import CareerProcesscareerProgress from "../CareerProcesscareerProgress";

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
      <CareerProcesscareerProgress width="500px" height="500px" />
    </div>
  );
};

export default Example;
