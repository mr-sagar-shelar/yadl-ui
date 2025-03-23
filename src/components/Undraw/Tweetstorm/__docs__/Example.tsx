import React, { FC } from "react";
import Tweetstorm from "../Tweetstorm";

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
      <Tweetstorm width="500px" height="500px" />
    </div>
  );
};

export default Example;
