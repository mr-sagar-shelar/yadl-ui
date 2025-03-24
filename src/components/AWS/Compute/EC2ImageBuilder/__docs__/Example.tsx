import React, { FC } from "react";
  import EC2ImageBuilder from "../EC2ImageBuilder";
  
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
        <EC2ImageBuilder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  