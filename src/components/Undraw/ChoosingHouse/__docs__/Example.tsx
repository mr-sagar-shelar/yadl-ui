import React, { FC } from "react";
  import ChoosingHouse from "../ChoosingHouse";
  
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
        <ChoosingHouse width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  