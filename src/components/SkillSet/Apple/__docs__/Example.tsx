import React, { FC } from "react";
  import Apple from "../Apple";
  
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
        <Apple width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  