import React, { FC } from "react";
import Bookmarks from "../Bookmarks";

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
      <Bookmarks width="500px" height="500px" />
    </div>
  );
};

export default Example;
