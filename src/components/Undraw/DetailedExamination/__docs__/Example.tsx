import React, { FC } from "react";
import DetailedExamination from "../DetailedExamination";

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
      <DetailedExamination width="500px" height="500px" />
    </div>
  );
};

export default Example;
