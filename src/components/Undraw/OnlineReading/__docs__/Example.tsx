import React, { FC } from "react";
import OnlineReading from "../OnlineReading";

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
      <OnlineReading width="500px" height="500px" />
    </div>
  );
};

export default Example;
