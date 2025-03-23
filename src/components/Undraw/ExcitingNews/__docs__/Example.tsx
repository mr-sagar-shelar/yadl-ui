import React, { FC } from "react";
import ExcitingNews from "../ExcitingNews";

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
      <ExcitingNews width="500px" height="500px" />
    </div>
  );
};

export default Example;
