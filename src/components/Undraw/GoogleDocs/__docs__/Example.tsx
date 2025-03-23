import React, { FC } from "react";
import GoogleDocs from "../GoogleDocs";

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
      <GoogleDocs width="500px" height="500px" />
    </div>
  );
};

export default Example;
