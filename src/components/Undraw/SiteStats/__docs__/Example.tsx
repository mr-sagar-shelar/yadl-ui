import React, { FC } from "react";
import SiteStats from "../SiteStats";

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
      <SiteStats width="500px" height="500px" />
    </div>
  );
};

export default Example;
