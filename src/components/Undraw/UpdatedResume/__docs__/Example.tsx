import React, { FC } from "react";
import UpdatedResume from "../UpdatedResume";

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
      <UpdatedResume width="500px" height="500px" />
    </div>
  );
};

export default Example;
