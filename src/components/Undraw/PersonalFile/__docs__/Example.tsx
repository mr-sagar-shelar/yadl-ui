import React, { FC } from "react";
import PersonalFile from "../PersonalFile";

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
      <PersonalFile width="500px" height="500px" />
    </div>
  );
};

export default Example;
