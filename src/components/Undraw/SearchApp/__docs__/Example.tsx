import React, { FC } from "react";
import SearchApp from "../SearchApp";

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
      <SearchApp width="500px" height="500px" />
    </div>
  );
};

export default Example;
