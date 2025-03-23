import React, { FC } from "react";
import Photo from "../Photo";

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
      <Photo width="500px" height="500px" />
    </div>
  );
};

export default Example;
