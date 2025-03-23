import React, { FC } from "react";
import Art from "../Art";

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
      <Art width="500px" height="500px" />
    </div>
  );
};

export default Example;
