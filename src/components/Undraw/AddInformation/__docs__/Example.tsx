import React, { FC } from "react";
import AddInformation from "../AddInformation";

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
      <AddInformation width="500px" height="500px" />
    </div>
  );
};

export default Example;
