import React, { FC } from "react";
import WorkingFromAnywhere from "../WorkingFromAnywhere";

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
      <WorkingFromAnywhere width="500px" height="500px" />
    </div>
  );
};

export default Example;
