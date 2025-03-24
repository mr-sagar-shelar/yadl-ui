import React, { FC } from "react";
  import SVG from "../SVG";
  
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
        <SVG width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  