import React, { FC } from "react";
import PersonalTrainer from "../PersonalTrainer";

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
      <PersonalTrainer width="500px" height="500px" />
    </div>
  );
};

export default Example;
