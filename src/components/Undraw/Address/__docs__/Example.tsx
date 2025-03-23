import React, { FC } from "react";
import Address from "../Address";

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
      <Address width="500px" height="500px" />
    </div>
  );
};

export default Example;
