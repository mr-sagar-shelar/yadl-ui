import React, { FC } from "react";
import MeetTheTeam from "../MeetTheTeam";

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
      <MeetTheTeam width="500px" height="500px" />
    </div>
  );
};

export default Example;
