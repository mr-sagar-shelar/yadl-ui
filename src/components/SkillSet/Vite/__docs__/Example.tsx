import React, { FC } from "react";
  import Vite from "../Vite";
  
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
        <Vite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  