import React, { FC } from "react";
import MailSent from "../MailSent";

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
      <MailSent width="500px" height="500px" />
    </div>
  );
};

export default Example;
