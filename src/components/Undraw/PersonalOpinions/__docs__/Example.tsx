import React, { FC } from "react";
import PersonalOpinions from "../PersonalOpinions";

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
      <PersonalOpinions width="500px" height="500px" />
    </div>
  );
};

export default Example;
