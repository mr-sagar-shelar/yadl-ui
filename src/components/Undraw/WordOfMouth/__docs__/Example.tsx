import React, { FC } from "react";
  import WordOfMouth from "../WordOfMouth";
  
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
        <WordOfMouth width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  