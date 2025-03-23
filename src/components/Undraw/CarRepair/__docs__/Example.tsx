import React, { FC } from "react";
import CarRepair from "../CarRepair";

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
      <CarRepair width="500px" height="500px" />
    </div>
  );
};

export default Example;
