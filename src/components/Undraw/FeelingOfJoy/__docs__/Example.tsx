import React, { FC } from "react";
import FeelingOfJoy from "../FeelingOfJoy";

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
      <FeelingOfJoy width="500px" height="500px" />
    </div>
  );
};

export default Example;
