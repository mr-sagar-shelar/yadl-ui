import React, { FC } from "react";
import OnlineMedia from "../OnlineMedia";

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
      <OnlineMedia width="500px" height="500px" />
    </div>
  );
};

export default Example;
