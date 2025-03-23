import React, { FC } from "react";
import GroupHangout from "../GroupHangout";

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
      <GroupHangout width="500px" height="500px" />
    </div>
  );
};

export default Example;
