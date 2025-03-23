import React, { FC } from "react";
import Switches from "../Switches";

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
      <Switches width="500px" height="500px" />
    </div>
  );
};

export default Example;
