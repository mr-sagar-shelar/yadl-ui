import React, { FC } from "react";
import Barbecue from "../Barbecue";

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
      <Barbecue width="500px" height="500px" />
    </div>
  );
};

export default Example;
