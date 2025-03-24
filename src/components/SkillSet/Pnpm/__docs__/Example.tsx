import React, { FC } from "react";
  import Pnpm from "../Pnpm";
  
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
        <Pnpm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  