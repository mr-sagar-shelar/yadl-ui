import React, { FC } from "react";
import FashionBlogging from "../FashionBlogging";

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
      <FashionBlogging width="500px" height="500px" />
    </div>
  );
};

export default Example;
