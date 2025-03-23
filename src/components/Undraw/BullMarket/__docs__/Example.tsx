import React, { FC } from "react";
import BullMarket from "../BullMarket";

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
      <BullMarket width="500px" height="500px" />
    </div>
  );
};

export default Example;
