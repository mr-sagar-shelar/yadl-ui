import React, { FC } from "react";
import OnlineOrganizer from "../OnlineOrganizer";

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
      <OnlineOrganizer width="500px" height="500px" />
    </div>
  );
};

export default Example;
