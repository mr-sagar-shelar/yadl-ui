import React, { FC } from "react";
import AddPost from "../AddPost";

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
      <AddPost width="500px" height="500px" />
    </div>
  );
};

export default Example;
