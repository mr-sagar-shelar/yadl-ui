import React, { FC } from "react";
import PersonalSite from "../PersonalSite";

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
      <PersonalSite width="500px" height="500px" />
    </div>
  );
};

export default Example;
