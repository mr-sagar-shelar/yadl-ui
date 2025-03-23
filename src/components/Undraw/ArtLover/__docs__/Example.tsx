import React, { FC } from "react";
import ArtLover from "../ArtLover";

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
      <ArtLover width="500px" height="500px" />
    </div>
  );
};

export default Example;
