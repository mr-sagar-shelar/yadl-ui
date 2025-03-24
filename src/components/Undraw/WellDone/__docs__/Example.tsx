import React, { FC } from "react";
  import WellDone from "../WellDone";
  
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
        <WellDone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  