import React, { FC } from "react";
import OnlineArticles from "../OnlineArticles";

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
      <OnlineArticles width="500px" height="500px" />
    </div>
  );
};

export default Example;
