import React, { FC } from "react";
import OnlineEverywhere from "../OnlineEverywhere";

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
      <OnlineEverywhere width="500px" height="500px" />
    </div>
  );
};

export default Example;
