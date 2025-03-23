import React, { FC } from "react";
import Personalization from "../Personalization";

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
      <Personalization width="500px" height="500px" />
    </div>
  );
};

export default Example;
