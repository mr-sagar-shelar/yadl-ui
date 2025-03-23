import React, { FC } from "react";
import SoftwareEngineer from "../SoftwareEngineer";

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
      <SoftwareEngineer width="500px" height="500px" />
    </div>
  );
};

export default Example;
