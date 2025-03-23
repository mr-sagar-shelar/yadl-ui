import React, { FC } from "react";
import ShareOnline from "../ShareOnline";

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
      <ShareOnline width="500px" height="500px" />
    </div>
  );
};

export default Example;
