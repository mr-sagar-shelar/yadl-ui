import React, { FC } from "react";
import DetailedInformation from "../DetailedInformation";

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
      <DetailedInformation width="500px" height="500px" />
    </div>
  );
};

export default Example;
