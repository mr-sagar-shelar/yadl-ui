import React, { FC } from "react";
  import Celebrating from "../Celebrating";
  
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
        <Celebrating width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  