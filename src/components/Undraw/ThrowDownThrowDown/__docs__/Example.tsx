import React, { FC } from "react";
  import ThrowDownThrowDown from "../ThrowDownThrowDown";
  
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
        <ThrowDownThrowDown width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  