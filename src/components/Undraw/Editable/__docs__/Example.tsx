import React, { FC } from "react";
import Editable from "../Editable";

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
      <Editable width="500px" height="500px" />
    </div>
  );
};

export default Example;
