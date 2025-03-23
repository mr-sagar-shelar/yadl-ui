import React, { FC } from "react";
import CreativeWoman from "../CreativeWoman";

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
      <CreativeWoman width="500px" height="500px" />
    </div>
  );
};

export default Example;
