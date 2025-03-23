import React, { FC } from "react";
import SnapTheMoment from "../SnapTheMoment";

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
      <SnapTheMoment width="500px" height="500px" />
    </div>
  );
};

export default Example;
