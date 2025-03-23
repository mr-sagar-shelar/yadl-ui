import React, { FC } from "react";
import MyNotifications from "../MyNotifications";

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
      <MyNotifications width="500px" height="500px" />
    </div>
  );
};

export default Example;
