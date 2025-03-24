import React, { FC } from "react";
  import Detonation from "../Detonation";
  
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
        <Detonation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  