import React, { FC } from "react";
import Teaching from "../Teaching";

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
      <Teaching width="500px" height="500px" />
    </div>
  );
};

export default Example;
