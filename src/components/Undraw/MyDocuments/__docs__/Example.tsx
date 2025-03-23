import React, { FC } from "react";
import MyDocuments from "../MyDocuments";

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
      <MyDocuments width="500px" height="500px" />
    </div>
  );
};

export default Example;
