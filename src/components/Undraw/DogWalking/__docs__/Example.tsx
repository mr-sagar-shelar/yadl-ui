import React, { FC } from "react";
import DogWalking from "../DogWalking";

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
      <DogWalking width="500px" height="500px" />
    </div>
  );
};

export default Example;
