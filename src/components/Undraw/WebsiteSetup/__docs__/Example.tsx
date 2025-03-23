import React, { FC } from "react";
import WebsiteSetup from "../WebsiteSetup";

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
      <WebsiteSetup width="500px" height="500px" />
    </div>
  );
};

export default Example;
