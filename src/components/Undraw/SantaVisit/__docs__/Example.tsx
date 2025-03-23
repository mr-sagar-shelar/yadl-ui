import React, { FC } from "react";
import SantaVisit from "../SantaVisit";

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
      <SantaVisit width="500px" height="500px" />
    </div>
  );
};

export default Example;
