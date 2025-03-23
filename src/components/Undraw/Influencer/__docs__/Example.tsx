import React, { FC } from "react";
import Influencer from "../Influencer";

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
      <Influencer width="500px" height="500px" />
    </div>
  );
};

export default Example;
