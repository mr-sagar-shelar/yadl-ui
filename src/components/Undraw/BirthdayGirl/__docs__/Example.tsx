import React, { FC } from "react";
import BirthdayGirl from "../BirthdayGirl";

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
      <BirthdayGirl width="500px" height="500px" />
    </div>
  );
};

export default Example;
