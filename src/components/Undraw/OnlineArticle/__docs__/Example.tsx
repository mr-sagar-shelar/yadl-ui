import React, { FC } from "react";
import OnlineArticle from "../OnlineArticle";

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
      <OnlineArticle width="500px" height="500px" />
    </div>
  );
};

export default Example;
