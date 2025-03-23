import React, { FC } from "react";
import SocialNotifications from "../SocialNotifications";

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
      <SocialNotifications width="500px" height="500px" />
    </div>
  );
};

export default Example;
