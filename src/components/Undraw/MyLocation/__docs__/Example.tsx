import React, { FC } from "react";
import MyLocation from "../MyLocation";

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
      <MyLocation width="500px" height="500px" />
    </div>
  );
};

export default Example;
