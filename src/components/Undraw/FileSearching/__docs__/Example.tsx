import React, { FC } from "react";
import FileSearching from "../FileSearching";

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
      <FileSearching width="500px" height="500px" />
    </div>
  );
};

export default Example;
