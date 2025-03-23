import React, { FC } from "react";
import Pride from "../Pride";

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
      <Pride width="500px" height="500px" />
    </div>
  );
};

export default Example;
