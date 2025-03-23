import React, { FC } from "react";
import SharingArticles from "../SharingArticles";

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
      <SharingArticles width="500px" height="500px" />
    </div>
  );
};

export default Example;
