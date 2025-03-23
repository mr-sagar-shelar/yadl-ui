import React, { FC } from "react";
import ScheduleMeeting from "../ScheduleMeeting";

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
      <ScheduleMeeting width="500px" height="500px" />
    </div>
  );
};

export default Example;
