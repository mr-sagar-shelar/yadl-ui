import React, { FC } from "react";
import EmptyStreet from "../EmptyStreet";

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
      <EmptyStreet width="500px" height="500px" />
    </div>
  );
};

export default Example;
