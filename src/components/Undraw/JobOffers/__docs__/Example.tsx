import React, { FC } from "react";
import JobOffers from "../JobOffers";

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
      <JobOffers width="500px" height="500px" />
    </div>
  );
};

export default Example;
