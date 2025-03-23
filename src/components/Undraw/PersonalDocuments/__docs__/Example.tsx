import React, { FC } from "react";
import PersonalDocuments from "../PersonalDocuments";

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
      <PersonalDocuments width="500px" height="500px" />
    </div>
  );
};

export default Example;
