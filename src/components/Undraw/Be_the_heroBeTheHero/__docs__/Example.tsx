import React, { FC } from "react";
import Be_the_heroBeTheHero from "../Be_the_heroBeTheHero";

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
      <Be_the_heroBeTheHero width="500px" height="500px" />
    </div>
  );
};

export default Example;
