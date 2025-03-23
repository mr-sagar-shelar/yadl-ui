import React, { FC } from "react";
import Yacht from "../Yacht";

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
      <Yacht width="500px" height="500px" />
    </div>
  );
};

export default Example;
