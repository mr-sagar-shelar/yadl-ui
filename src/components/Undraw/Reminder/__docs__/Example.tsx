import React, { FC } from "react";
import Reminder from "../Reminder";

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
      <Reminder width="500px" height="500px" />
    </div>
  );
};

export default Example;
