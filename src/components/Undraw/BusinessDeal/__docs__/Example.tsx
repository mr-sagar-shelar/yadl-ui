import React, { FC } from "react";
import BusinessDeal from "../BusinessDeal";

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
      <BusinessDeal width="500px" height="500px" />
    </div>
  );
};

export default Example;
