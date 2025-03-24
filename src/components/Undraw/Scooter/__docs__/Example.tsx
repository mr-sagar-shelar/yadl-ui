import React, { FC } from "react";
  import Scooter from "../Scooter";
  
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
        <Scooter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  