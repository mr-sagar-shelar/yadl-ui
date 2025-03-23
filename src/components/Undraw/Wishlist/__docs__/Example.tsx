import React, { FC } from "react";
import Wishlist from "../Wishlist";

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
      <Wishlist width="500px" height="500px" />
    </div>
  );
};

export default Example;
