import React, { FC } from "react";
import Happy2021 from "../Happy2021";

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
      <Happy2021 width="500px" height="500px" />
    </div>
  );
};

export default Example;
