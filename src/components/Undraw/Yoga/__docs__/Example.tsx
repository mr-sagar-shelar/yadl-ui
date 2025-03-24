import React, { FC } from "react";
  import Yoga from "../Yoga";
  
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
        <Yoga width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  