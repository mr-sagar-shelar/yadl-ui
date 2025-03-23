import React, { FC } from "react";
import Podcast from "../Podcast";

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
      <Podcast width="500px" height="500px" />
    </div>
  );
};

export default Example;
