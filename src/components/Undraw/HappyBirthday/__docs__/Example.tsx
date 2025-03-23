import React, { FC } from "react";
import HappyBirthday from "../HappyBirthday";

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
      <HappyBirthday width="500px" height="500px" />
    </div>
  );
};

export default Example;
