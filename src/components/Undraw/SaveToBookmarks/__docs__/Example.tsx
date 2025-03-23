import React, { FC } from "react";
import SaveToBookmarks from "../SaveToBookmarks";

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
      <SaveToBookmarks width="500px" height="500px" />
    </div>
  );
};

export default Example;
