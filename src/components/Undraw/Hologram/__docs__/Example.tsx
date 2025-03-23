import React, { FC } from "react";
import Hologram from "../Hologram";

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
      <Hologram width="500px" height="500px" />
    </div>
  );
};

export default Example;
