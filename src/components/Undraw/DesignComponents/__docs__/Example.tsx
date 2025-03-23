import React, { FC } from "react";
import DesignComponents from "../DesignComponents";

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
      <DesignComponents width="500px" height="500px" />
    </div>
  );
};

export default Example;
