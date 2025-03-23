import React, { FC } from "react";
import SecurityOn from "../SecurityOn";

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
      <SecurityOn width="500px" height="500px" />
    </div>
  );
};

export default Example;
