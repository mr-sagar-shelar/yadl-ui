import React, { FC } from "react";
import MyWebsite from "../MyWebsite";

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
      <MyWebsite width="500px" height="500px" />
    </div>
  );
};

export default Example;
