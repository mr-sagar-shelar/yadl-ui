import React, { FC } from "react";
import OnlineCollaboration from "../OnlineCollaboration";

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
      <OnlineCollaboration width="500px" height="500px" />
    </div>
  );
};

export default Example;
