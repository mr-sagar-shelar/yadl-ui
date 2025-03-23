import React, { FC } from "react";
import NetflixNetflix from "../NetflixNetflix";

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
      <NetflixNetflix width="500px" height="500px" />
    </div>
  );
};

export default Example;
