import React, { FC } from "react";
import Sunlight from "../Sunlight";

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
      <Sunlight width="500px" height="500px" />
    </div>
  );
};

export default Example;
