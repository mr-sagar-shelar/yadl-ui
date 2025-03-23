import React, { FC } from "react";
import PersonalText from "../PersonalText";

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
      <PersonalText width="500px" height="500px" />
    </div>
  );
};

export default Example;
