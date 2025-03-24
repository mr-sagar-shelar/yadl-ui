import React, { FC } from "react";
  import Percentages from "../Percentages";
  
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
        <Percentages width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  