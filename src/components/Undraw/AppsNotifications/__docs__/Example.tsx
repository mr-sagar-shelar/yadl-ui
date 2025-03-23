import React, { FC } from "react";
import AppsNotifications from "../AppsNotifications";

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
      <AppsNotifications width="500px" height="500px" />
    </div>
  );
};

export default Example;
