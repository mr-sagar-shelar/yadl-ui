import React, { FC } from "react";
import OnlinePosts from "../OnlinePosts";

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
      <OnlinePosts width="500px" height="500px" />
    </div>
  );
};

export default Example;
