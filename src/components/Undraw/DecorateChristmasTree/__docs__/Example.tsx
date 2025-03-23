import React, { FC } from "react";
import DecorateChristmasTree from "../DecorateChristmasTree";

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
      <DecorateChristmasTree width="500px" height="500px" />
    </div>
  );
};

export default Example;
