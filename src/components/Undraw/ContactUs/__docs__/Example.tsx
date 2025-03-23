import React, { FC } from "react";
import ContactUs from "../ContactUs";

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
      <ContactUs width="500px" height="500px" />
    </div>
  );
};

export default Example;
