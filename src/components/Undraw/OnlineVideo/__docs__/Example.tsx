import React, { FC } from "react";
import OnlineVideo from "../OnlineVideo";

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
      <OnlineVideo width="500px" height="500px" />
    </div>
  );
};

export default Example;
