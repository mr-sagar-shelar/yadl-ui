import React, { FC } from "react";
import Calendar from "../Calendar";

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
      <Calendar />
    </div>
  );
};

export default Example;