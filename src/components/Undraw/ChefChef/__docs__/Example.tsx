import React, { FC } from "react";
import ChefChef from "../ChefChef";

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
      <ChefChef width="500px" height="500px" />
    </div>
  );
};

export default Example;
