import React, { FC } from "react";
import SmallTown from "../SmallTown";

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
      <SmallTown width="500px" height="500px" />
    </div>
  );
};

export default Example;
