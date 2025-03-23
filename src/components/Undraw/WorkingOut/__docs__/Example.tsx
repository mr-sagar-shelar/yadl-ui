import React, { FC } from "react";
import WorkingOut from "../WorkingOut";

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
      <WorkingOut width="500px" height="500px" />
    </div>
  );
};

export default Example;
