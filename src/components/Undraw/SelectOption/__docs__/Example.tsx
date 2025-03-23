import React, { FC } from "react";
import SelectOption from "../SelectOption";

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
      <SelectOption width="500px" height="500px" />
    </div>
  );
};

export default Example;
