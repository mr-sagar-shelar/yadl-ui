import React, { FC } from "react";
import ShareLink from "../ShareLink";

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
      <ShareLink width="500px" height="500px" />
    </div>
  );
};

export default Example;
