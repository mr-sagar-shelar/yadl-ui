import React, { FC } from "react";
import TermSheet from "../TermSheet";

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
      <TermSheet width="500px" height="500px" />
    </div>
  );
};

export default Example;
