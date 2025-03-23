import React, { FC } from "react";
import BusStop from "../BusStop";

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
      <BusStop width="500px" height="500px" />
    </div>
  );
};

export default Example;
