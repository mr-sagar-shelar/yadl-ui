import React, { FC } from "react";
  import ProgressData from "../ProgressData";
  
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
        <ProgressData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  