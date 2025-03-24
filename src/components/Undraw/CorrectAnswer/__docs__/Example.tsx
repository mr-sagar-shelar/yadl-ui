import React, { FC } from "react";
  import CorrectAnswer from "../CorrectAnswer";
  
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
        <CorrectAnswer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  