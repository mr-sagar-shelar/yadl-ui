import React, { FC } from "react";
import DigitalArtwork from "../DigitalArtwork";

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
      <DigitalArtwork width="500px" height="500px" />
    </div>
  );
};

export default Example;
