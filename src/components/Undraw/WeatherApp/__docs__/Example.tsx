import React, { FC } from "react";
import WeatherApp from "../WeatherApp";

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
      <WeatherApp width="500px" height="500px" />
    </div>
  );
};

export default Example;
