import React, { FC } from "react";
import ProfileDetails from "../ProfileDetails";

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
      <ProfileDetails width="500px" height="500px" />
    </div>
  );
};

export default Example;
