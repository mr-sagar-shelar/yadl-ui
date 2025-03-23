import React, { FC } from "react";
import PodcastListener from "../PodcastListener";

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
      <PodcastListener width="500px" height="500px" />
    </div>
  );
};

export default Example;
