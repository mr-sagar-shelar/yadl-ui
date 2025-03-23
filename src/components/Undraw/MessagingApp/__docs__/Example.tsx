import React, { FC } from "react";
import MessagingApp from "../MessagingApp";

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
      <MessagingApp width="500px" height="500px" />
    </div>
  );
};

export default Example;
