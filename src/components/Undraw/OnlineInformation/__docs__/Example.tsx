import React, { FC } from "react";
import OnlineInformation from "../OnlineInformation";

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
      <OnlineInformation width="500px" height="500px" />
    </div>
  );
};

export default Example;
