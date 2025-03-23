import React, { FC } from "react";
import ActiveOptions from "../ActiveOptions";

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
      <ActiveOptions width="500px" height="500px" />
    </div>
  );
};

export default Example;
