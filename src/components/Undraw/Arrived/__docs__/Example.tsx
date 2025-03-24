import React, { FC } from "react";
  import Arrived from "../Arrived";
  
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
        <Arrived width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  