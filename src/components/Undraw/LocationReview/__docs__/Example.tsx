import React, { FC } from "react";
import LocationReview from "../LocationReview";

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
      <LocationReview width="500px" height="500px" />
    </div>
  );
};

export default Example;
