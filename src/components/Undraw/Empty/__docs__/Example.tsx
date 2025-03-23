import React, { FC } from "react";
import Empty from "../Empty";

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
      <Empty width="500px" height="500px" />
    </div>
  );
};

export default Example;
