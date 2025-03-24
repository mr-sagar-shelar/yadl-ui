import React, { FC } from "react";
  import CirclesCircles from "../CirclesCircles";
  
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
        <CirclesCircles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  