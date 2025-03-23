import React, { FC } from "react";
import Home_cinemaHomeCinema from "../Home_cinemaHomeCinema";

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
      <Home_cinemaHomeCinema width="500px" height="500px" />
    </div>
  );
};

export default Example;
