import React, { FC } from "react";
import SweetHome from "../SweetHome";

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
      <SweetHome width="500px" height="500px" />
    </div>
  );
};

export default Example;
