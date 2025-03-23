import React, { FC } from "react";
import FarmGirl from "../FarmGirl";

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
      <FarmGirl width="500px" height="500px" />
    </div>
  );
};

export default Example;
