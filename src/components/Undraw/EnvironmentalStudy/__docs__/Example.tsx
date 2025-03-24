import React, { FC } from "react";
  import EnvironmentalStudy from "../EnvironmentalStudy";
  
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
        <EnvironmentalStudy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  