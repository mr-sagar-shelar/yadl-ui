import React, { FC } from "react";
import OnTheWay from "../OnTheWay";

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
      <OnTheWay width="500px" height="500px" />
    </div>
  );
};

export default Example;
