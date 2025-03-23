import React, { FC } from "react";
import SecureLogin from "../SecureLogin";

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
      <SecureLogin width="500px" height="500px" />
    </div>
  );
};

export default Example;
