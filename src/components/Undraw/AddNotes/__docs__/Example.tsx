import React, { FC } from "react";
import AddNotes from "../AddNotes";

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
      <AddNotes width="500px" height="500px" />
    </div>
  );
};

export default Example;
