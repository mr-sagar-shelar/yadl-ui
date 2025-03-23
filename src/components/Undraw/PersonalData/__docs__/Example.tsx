import React, { FC } from "react";
import PersonalData from "../PersonalData";

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
      <PersonalData width="500px" height="500px" />
    </div>
  );
};

export default Example;
