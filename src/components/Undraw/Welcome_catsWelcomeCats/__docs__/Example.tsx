import React, { FC } from "react";
import Welcome_catsWelcomeCats from "../Welcome_catsWelcomeCats";

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
      <Welcome_catsWelcomeCats width="500px" height="500px" />
    </div>
  );
};

export default Example;
