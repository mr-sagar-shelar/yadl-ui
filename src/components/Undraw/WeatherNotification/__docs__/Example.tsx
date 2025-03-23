import React, { FC } from "react";
import WeatherNotification from "../WeatherNotification";

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
      <WeatherNotification width="500px" height="500px" />
    </div>
  );
};

export default Example;
