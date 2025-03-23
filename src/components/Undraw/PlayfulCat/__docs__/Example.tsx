import React, { FC } from "react";
import PlayfulCat from "../PlayfulCat";

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
      <PlayfulCat width="500px" height="500px" />
    </div>
  );
};

export default Example;
