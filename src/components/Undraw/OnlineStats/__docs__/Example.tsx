import React, { FC } from "react";
import OnlineStats from "../OnlineStats";

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
      <OnlineStats width="500px" height="500px" />
    </div>
  );
};

export default Example;
