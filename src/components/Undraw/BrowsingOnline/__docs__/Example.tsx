import React, { FC } from "react";
import BrowsingOnline from "../BrowsingOnline";

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
      <BrowsingOnline width="500px" height="500px" />
    </div>
  );
};

export default Example;
