import React, { FC } from "react";
  import Textract from "../Textract";
  
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
        <Textract width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  