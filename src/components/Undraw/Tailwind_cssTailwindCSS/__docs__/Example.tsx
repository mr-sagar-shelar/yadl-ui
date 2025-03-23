import React, { FC } from "react";
import Tailwind_cssTailwindCSS from "../Tailwind_cssTailwindCSS";

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
      <Tailwind_cssTailwindCSS width="500px" height="500px" />
    </div>
  );
};

export default Example;
