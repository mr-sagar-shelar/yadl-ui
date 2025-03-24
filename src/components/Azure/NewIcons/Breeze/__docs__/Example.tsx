import React, { FC } from "react";
  import Breeze from "../Breeze";
  
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
        <Breeze width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  