import React, { FC } from "react";
import NatureOnScreen from "../NatureOnScreen";

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
      <NatureOnScreen width="500px" height="500px" />
    </div>
  );
};

export default Example;
