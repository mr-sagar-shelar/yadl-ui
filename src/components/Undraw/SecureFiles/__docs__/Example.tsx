import React, { FC } from "react";
import SecureFiles from "../SecureFiles";

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
      <SecureFiles width="500px" height="500px" />
    </div>
  );
};

export default Example;
