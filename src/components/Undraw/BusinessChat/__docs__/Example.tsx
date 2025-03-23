import React, { FC } from "react";
import BusinessChat from "../BusinessChat";

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
      <BusinessChat width="500px" height="500px" />
    </div>
  );
};

export default Example;
