import React, { FC } from "react";
  import Studying from "../Studying";
  
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
        <Studying width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  