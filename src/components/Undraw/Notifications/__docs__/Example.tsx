import React, { FC } from "react";
import Notifications from "../Notifications";

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
      <Notifications width="500px" height="500px" />
    </div>
  );
};

export default Example;
