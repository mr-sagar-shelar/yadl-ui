import React, { FC } from "react";
import Filter from "../Filter";

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
      <Filter width="500px" height="500px" />
    </div>
  );
};

export default Example;
