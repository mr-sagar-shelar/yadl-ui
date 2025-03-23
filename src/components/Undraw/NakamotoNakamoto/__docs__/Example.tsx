import React, { FC } from "react";
import NakamotoNakamoto from "../NakamotoNakamoto";

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
      <NakamotoNakamoto width="500px" height="500px" />
    </div>
  );
};

export default Example;
