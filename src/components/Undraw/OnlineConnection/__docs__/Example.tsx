import React, { FC } from "react";
import OnlineConnection from "../OnlineConnection";

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
      <OnlineConnection width="500px" height="500px" />
    </div>
  );
};

export default Example;
