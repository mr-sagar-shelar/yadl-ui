import React, { FC } from "react";
import NoteList from "../NoteList";

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
      <NoteList width="500px" height="500px" />
    </div>
  );
};

export default Example;
