import React, { FC } from "react";
import PleasantSurprise from "../PleasantSurprise";

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
      <PleasantSurprise width="500px" height="500px" />
    </div>
  );
};

export default Example;
