import React, { FC } from "react";
  import InLove from "../InLove";
  
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
        <InLove width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  