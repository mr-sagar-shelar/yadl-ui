import React, { FC } from "react";
import DesignInspiration from "../DesignInspiration";

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
      <DesignInspiration width="500px" height="500px" />
    </div>
  );
};

export default Example;
