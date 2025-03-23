import React, { FC } from "react";
import AlgoliaAlgolia from "../AlgoliaAlgolia";

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
      <AlgoliaAlgolia width="500px" height="500px" />
    </div>
  );
};

export default Example;
