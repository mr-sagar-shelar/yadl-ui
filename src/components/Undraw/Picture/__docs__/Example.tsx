import React, { FC } from "react";
import Picture from "../Picture";

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
      <Picture width="500px" height="500px" />
    </div>
  );
};

export default Example;
