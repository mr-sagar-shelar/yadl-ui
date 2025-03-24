import React, { FC } from "react";
  import TailwindCSS from "../TailwindCSS";
  
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
        <TailwindCSS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  