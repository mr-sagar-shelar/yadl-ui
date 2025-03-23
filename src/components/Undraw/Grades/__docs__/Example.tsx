import React, { FC } from "react";
import Grades from "../Grades";

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
      <Grades width="500px" height="500px" />
    </div>
  );
};

export default Example;
