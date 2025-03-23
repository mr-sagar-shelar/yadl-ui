import React, { FC } from "react";
import PostingPhoto from "../PostingPhoto";

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
      <PostingPhoto width="500px" height="500px" />
    </div>
  );
};

export default Example;
