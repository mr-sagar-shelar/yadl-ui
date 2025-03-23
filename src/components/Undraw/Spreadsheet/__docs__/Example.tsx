import React, { FC } from "react";
import Spreadsheet from "../Spreadsheet";

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
      <Spreadsheet width="500px" height="500px" />
    </div>
  );
};

export default Example;
