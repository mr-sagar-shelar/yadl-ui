import React, { FC } from "react";
import Select from "../Select";

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
      <Select width="500px" height="500px" />
    </div>
  );
};

export default Example;
