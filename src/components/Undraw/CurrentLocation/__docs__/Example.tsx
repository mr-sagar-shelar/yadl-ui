import React, { FC } from "react";
import CurrentLocation from "../CurrentLocation";

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
      <CurrentLocation width="500px" height="500px" />
    </div>
  );
};

export default Example;
