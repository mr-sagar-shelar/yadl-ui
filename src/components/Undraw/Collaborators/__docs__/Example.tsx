import React, { FC } from "react";
import Collaborators from "../Collaborators";

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
      <Collaborators width="500px" height="500px" />
    </div>
  );
};

export default Example;
