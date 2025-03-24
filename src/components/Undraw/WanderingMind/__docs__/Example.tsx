import React, { FC } from "react";
  import WanderingMind from "../WanderingMind";
  
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
        <WanderingMind width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  