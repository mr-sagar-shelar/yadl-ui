import React, { FC } from "react";
import Both_sidesBothSides from "../Both_sidesBothSides";

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
      <Both_sidesBothSides width="500px" height="500px" />
    </div>
  );
};

export default Example;
