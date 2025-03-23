import React, { FC } from "react";
import UploadImage from "../UploadImage";

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
      <UploadImage width="500px" height="500px" />
    </div>
  );
};

export default Example;
