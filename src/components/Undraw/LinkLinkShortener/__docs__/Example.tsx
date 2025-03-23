import React, { FC } from "react";
import LinkLinkShortener from "../LinkLinkShortener";

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
      <LinkLinkShortener width="500px" height="500px" />
    </div>
  );
};

export default Example;
