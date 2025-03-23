import React, { FC } from "react";
import PublishPost from "../PublishPost";

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
      <PublishPost width="500px" height="500px" />
    </div>
  );
};

export default Example;
