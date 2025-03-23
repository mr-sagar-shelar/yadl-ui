import React, { FC } from "react";
import PersonalSettings from "../PersonalSettings";

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
      <PersonalSettings width="500px" height="500px" />
    </div>
  );
};

export default Example;
