import React, { FC } from "react";
import NewYear2021 from "../NewYear2021";

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
      <NewYear2021 width="500px" height="500px" />
    </div>
  );
};

export default Example;
