import React, { FC } from "react";
import DataExtraction from "../DataExtraction";

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
      <DataExtraction width="500px" height="500px" />
    </div>
  );
};

export default Example;
