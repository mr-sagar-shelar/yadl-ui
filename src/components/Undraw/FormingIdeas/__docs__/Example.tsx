import React, { FC } from "react";
import FormingIdeas from "../FormingIdeas";

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
      <FormingIdeas width="500px" height="500px" />
    </div>
  );
};

export default Example;
