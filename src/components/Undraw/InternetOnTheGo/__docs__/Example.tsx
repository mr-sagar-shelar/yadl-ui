import React, { FC } from "react";
import InternetOnTheGo from "../InternetOnTheGo";

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
      <InternetOnTheGo width="500px" height="500px" />
    </div>
  );
};

export default Example;
