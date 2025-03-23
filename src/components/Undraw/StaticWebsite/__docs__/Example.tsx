import React, { FC } from "react";
import StaticWebsite from "../StaticWebsite";

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
      <StaticWebsite width="500px" height="500px" />
    </div>
  );
};

export default Example;
