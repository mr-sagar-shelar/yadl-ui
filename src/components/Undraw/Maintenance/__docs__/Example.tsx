import React, { FC } from "react";
import Maintenance from "../Maintenance";

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
      <Maintenance width="500px" height="500px" />
    </div>
  );
};

export default Example;
