import React, { FC } from "react";
  import SwatchesPalette from "../SwatchesPalette";
  
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
        <SwatchesPalette width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  