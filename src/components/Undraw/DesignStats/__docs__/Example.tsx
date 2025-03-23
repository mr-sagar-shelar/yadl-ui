import React, { FC } from "react";
import DesignStats from "../DesignStats";

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
      <DesignStats width="500px" height="500px" />
    </div>
  );
};

export default Example;
