import React, { FC } from "react";
import SelectHouse from "../SelectHouse";

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
      <SelectHouse width="500px" height="500px" />
    </div>
  );
};

export default Example;
