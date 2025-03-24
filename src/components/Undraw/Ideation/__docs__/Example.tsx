import React, { FC } from "react";
  import Ideation from "../Ideation";
  
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
        <Ideation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  