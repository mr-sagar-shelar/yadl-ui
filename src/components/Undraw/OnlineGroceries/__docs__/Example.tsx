import React, { FC } from "react";
import OnlineGroceries from "../OnlineGroceries";

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
      <OnlineGroceries width="500px" height="500px" />
    </div>
  );
};

export default Example;
