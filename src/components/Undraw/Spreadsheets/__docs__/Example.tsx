import React, { FC } from "react";
import Spreadsheets from "../Spreadsheets";

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
      <Spreadsheets width="500px" height="500px" />
    </div>
  );
};

export default Example;
