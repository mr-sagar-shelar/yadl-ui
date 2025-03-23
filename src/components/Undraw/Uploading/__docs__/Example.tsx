import React, { FC } from "react";
import Uploading from "../Uploading";

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
      <Uploading width="500px" height="500px" />
    </div>
  );
};

export default Example;
