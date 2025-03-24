import React, { FC } from "react";
  import TeddyBearTeddyBear from "../TeddyBearTeddyBear";
  
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
        <TeddyBearTeddyBear width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  