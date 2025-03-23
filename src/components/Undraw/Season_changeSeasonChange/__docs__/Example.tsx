import React, { FC } from "react";
import Season_changeSeasonChange from "../Season_changeSeasonChange";

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
      <Season_changeSeasonChange width="500px" height="500px" />
    </div>
  );
};

export default Example;
