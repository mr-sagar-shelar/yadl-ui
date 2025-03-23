import React, { FC } from "react";
import Empty_cartEmptyCart from "../Empty_cartEmptyCart";

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
      <Empty_cartEmptyCart width="500px" height="500px" />
    </div>
  );
};

export default Example;
