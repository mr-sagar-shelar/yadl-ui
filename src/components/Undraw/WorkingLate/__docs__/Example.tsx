import React, { FC } from "react";
import WorkingLate from "../WorkingLate";

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
      <WorkingLate width="500px" height="500px" />
    </div>
  );
};

export default Example;
