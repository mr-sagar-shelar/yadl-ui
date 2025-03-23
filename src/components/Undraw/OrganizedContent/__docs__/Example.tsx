import React, { FC } from "react";
import OrganizedContent from "../OrganizedContent";

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
      <OrganizedContent width="500px" height="500px" />
    </div>
  );
};

export default Example;
