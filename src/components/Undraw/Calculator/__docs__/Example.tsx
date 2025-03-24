import React, { FC } from "react";
  import Calculator from "../Calculator";
  
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
        <Calculator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  