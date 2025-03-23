import React, { FC } from "react";
import Subscriber from "../Subscriber";

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
      <Subscriber width="500px" height="500px" />
    </div>
  );
};

export default Example;
