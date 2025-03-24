import React, { FC } from "react";
import BusinessMan from "../Businessman";

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
      <BusinessMan width="500px" height="500px" />
    </div>
  );
};

export default Example;
