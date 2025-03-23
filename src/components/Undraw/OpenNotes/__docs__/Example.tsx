import React, { FC } from "react";
import OpenNotes from "../OpenNotes";

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
      <OpenNotes width="500px" height="500px" />
    </div>
  );
};

export default Example;
